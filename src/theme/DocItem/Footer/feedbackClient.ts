// This file is part of midnight-docs.
// Copyright (C) Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type { PostHog } from "posthog-js";

export type Vote = "yes" | "no";

export interface FeedbackConfig {
  apiKey: string;
  apiHost: string;
}

/**
 * Reads the settings that docusaurus.config.js passes through customFields.
 * Returns null unless pageFeedbackEnabled is true (PAGE_FEEDBACK_ENABLED=true
 * at build time) and both PostHog settings are present. When it returns null
 * the feedback control never renders and posthog-js is never requested.
 */
export function getFeedbackConfig(
  customFields: Record<string, unknown> | undefined
): FeedbackConfig | null {
  if (customFields?.pageFeedbackEnabled !== true) {
    return null;
  }
  const apiKey = customFields?.posthogApiKey;
  const apiHost = customFields?.posthogApiHost;
  if (typeof apiKey !== "string" || typeof apiHost !== "string") {
    return null;
  }
  if (!apiKey.trim() || !apiHost.trim()) {
    return null;
  }
  return { apiKey: apiKey.trim(), apiHost: apiHost.trim() };
}

let client: Promise<PostHog> | undefined;

/**
 * The only event properties that leave the browser. before_send drops
 * everything else posthog-js adds, such as the full URL, referrer, campaign
 * parameters, user agent, screen size and session IDs.
 */
const SENT_PROPERTIES = new Set([
  "token",
  "distinct_id",
  "$lib",
  "$lib_version",
  "$process_person_profile",
  "$insert_id",
  "$time",
  "$browser",
  "$os",
  "$device_type",
  "feedback_id",
  "page_path",
  "page_title",
  "helpful",
  "comment"
]);

/**
 * posthog-js is only downloaded after a reader answers, and only feedback
 * events are sent. The named instance keeps this separate from any site-wide
 * PostHog setup. Nothing is stored in cookies or local storage.
 */
function loadClient({ apiKey, apiHost }: FeedbackConfig): Promise<PostHog> {
  if (!client) {
    client = import("posthog-js").then(({ posthog }) =>
      posthog.init(
        apiKey,
        {
          api_host: apiHost,
          persistence: "memory",
          person_profiles: "identified_only",
          autocapture: false,
          capture_pageview: false,
          capture_pageleave: false,
          disable_session_recording: true,
          disable_surveys: true,
          advanced_disable_flags: true,
          disable_external_dependency_loading: true,
          mask_personal_data_properties: true,
          respect_dnt: true,
          save_referrer: false,
          save_campaign_params: false,
          before_send: (event) =>
            event && {
              ...event,
              properties: Object.fromEntries(
                Object.entries(event.properties).filter(([key]) =>
                  SENT_PROPERTIES.has(key)
                )
              )
            }
        },
        "docs_page_feedback"
      )
    );
    // Let the next answer try again if the download failed.
    client.catch(() => {
      client = undefined;
    });
  }
  return client;
}

/** Sends one event. Resolves false when it could not be handed to PostHog. */
export async function sendFeedback(
  config: FeedbackConfig,
  event: string,
  properties: Record<string, string>
): Promise<boolean> {
  try {
    const posthog = await loadClient(config);
    const result = posthog.capture(event, properties, {
      send_instantly: true
    });
    return result !== undefined;
  } catch {
    return false;
  }
}
