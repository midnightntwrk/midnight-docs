import React, {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode
} from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useDoc, useDocsVersion } from "@docusaurus/plugin-content-docs/client";
import useHasConsent, {
  ConsentType
} from "@site/src/analytics-disabled/useHasConsent";
import { getFeedbackConfig, sendFeedback, type Vote } from "./feedbackClient";
import styles from "./PageFeedback.module.css";

const COMMENT_MAX_LENGTH = 500;

type Status = "asking" | "voted" | "thanked" | "commented" | "failed";

const MESSAGES: Record<Exclude<Status, "asking">, string> = {
  voted: "Thanks for your feedback.",
  thanked: "Thanks for your feedback.",
  commented: "Thanks, that helps.",
  failed: "Sorry, that didn't go through. Please try again later."
};

/** True when the browser sends Do Not Track or Global Privacy Control. */
function browserAsksNotToTrack(): boolean {
  const nav = navigator as Navigator & {
    globalPrivacyControl?: boolean;
    msDoNotTrack?: string;
  };
  const win = window as Window & { doNotTrack?: string };
  if (nav.globalPrivacyControl === true) {
    return true;
  }
  return [nav.doNotTrack, win.doNotTrack, nav.msDoNotTrack].some(
    (value) => value === "1" || value === "yes"
  );
}

function newFeedbackId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

/**
 * Whether this page can have the control at all: page feedback is switched
 * on, PostHog is configured, and this is the current docs version. The server
 * and the browser agree on it.
 */
export function usePageFeedbackAvailable(): boolean {
  const { siteConfig } = useDocusaurusContext();
  const { isLast } = useDocsVersion();
  return isLast && getFeedbackConfig(siteConfig.customFields) !== null;
}

/**
 * "Was this page helpful?" for the doc footer. It renders only in the
 * browser, and only for readers who allowed analytics in the cookie banner
 * and don't send Do Not Track or Global Privacy Control.
 */
export default function PageFeedback(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const { metadata } = useDoc();
  const isBrowser = useIsBrowser();
  const analyticsAllowed = useHasConsent(ConsentType.ANALYTICS);
  const optedOut = useHasConsent(ConsentType.OPT_OUT);
  const [status, setStatus] = useState<Status>("asking");
  const [vote, setVote] = useState<Vote | null>(null);
  const [comment, setComment] = useState("");
  const [feedbackId] = useState(newFeedbackId);
  const [announcement, setAnnouncement] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const focusMessage = useRef(false);
  const questionId = useId();
  const commentId = useId();
  const hintId = useId();
  const config = getFeedbackConfig(siteConfig.customFields);

  useEffect(() => {
    if (status !== "asking" && focusMessage.current) {
      messageRef.current?.focus();
    }
  }, [status]);

  if (
    !isBrowser ||
    config === null ||
    analyticsAllowed !== true ||
    optedOut === true ||
    browserAsksNotToTrack()
  ) {
    return null;
  }

  const page = {
    feedback_id: feedbackId,
    page_path: metadata.permalink,
    page_title: metadata.title
  };

  // Each step replaces the control the reader used. If focus was in the
  // control, it moves to the new message, which screen readers read out.
  // If the reader has moved on, or the click didn't focus the button (Safari
  // and Firefox on macOS), focus and scroll stay put and the live region
  // announces the message instead. Either way the message is in the page once.
  const show = (next: Exclude<Status, "asking">) => {
    focusMessage.current =
      rootRef.current?.contains(document.activeElement) ?? false;
    setAnnouncement(focusMessage.current ? "" : MESSAGES[next]);
    setStatus(next);
  };

  const answer = async (value: Vote) => {
    setVote(value);
    show("voted");
    const sent = await sendFeedback(config, "docs_page_feedback", {
      ...page,
      helpful: value
    });
    if (!sent) {
      show("failed");
    }
  };

  const submitComment = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = comment.trim().slice(0, COMMENT_MAX_LENGTH);
    if (!text || !vote) {
      show("thanked");
      return;
    }
    show("commented");
    const sent = await sendFeedback(config, "docs_page_feedback_comment", {
      ...page,
      helpful: vote,
      comment: text
    });
    if (!sent) {
      show("failed");
    }
  };

  return (
    <div ref={rootRef} className={styles.feedback}>
      {/* Rendered from the start so its updates are announced. */}
      <p role="status" aria-live="polite" className={styles.message}>
        {announcement}
      </p>
      {status === "asking" && (
        <div role="group" aria-labelledby={questionId} className={styles.ask}>
          <p id={questionId} className={styles.question}>
            Was this page helpful?
          </p>
          <div className={styles.answers}>
            <button
              type="button"
              className={clsx("button button--sm", styles.button)}
              onClick={() => answer("yes")}
            >
              Yes
            </button>
            <button
              type="button"
              className={clsx("button button--sm", styles.button)}
              onClick={() => answer("no")}
            >
              No
            </button>
          </div>
        </div>
      )}
      {status !== "asking" && !announcement && (
        // A new element per step, so focusing it is always announced.
        <p
          key={status}
          ref={messageRef}
          tabIndex={-1}
          className={styles.message}
        >
          {MESSAGES[status]}
        </p>
      )}
      {status === "voted" && (
        <form className={styles.form} onSubmit={submitComment}>
          <label htmlFor={commentId} className={styles.label}>
            {vote === "yes"
              ? "What could make this page better?"
              : "What was missing or wrong?"}{" "}
            <span className={styles.optional}>(optional)</span>
          </label>
          <textarea
            id={commentId}
            className={styles.textarea}
            rows={3}
            maxLength={COMMENT_MAX_LENGTH}
            aria-describedby={hintId}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <p id={hintId} className={styles.hint}>
            Up to {COMMENT_MAX_LENGTH} characters. Please leave out personal
            details.
          </p>
          <button
            type="submit"
            className={clsx("button button--sm", styles.button)}
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
