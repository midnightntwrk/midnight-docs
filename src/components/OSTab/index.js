// This file is part of midnight-docs.
// Copyright (C) 2025 Midnight Foundation
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

import React from "react";
import Tabs from "@theme/Tabs";

const ARM_REGEX = /arm/i;
const MACOS_REGEX = /(macOS|macintel)/i;
const LINUX_REGEX = /linux/i;
const WINDOWS_REGEX = /(windows|win32)/i;

export default function OSTab({ values, children }) {
    const [defaultTab, setDefaultTab] = React.useState("brew");

    React.useEffect(() => {
        const getHighEntropyValues =
            navigator?.userAgentData?.getHighEntropyValues;
        if (getHighEntropyValues !== undefined) {
            (async () => {
                const { platform, architecture } = await getHighEntropyValues([
                    "architecture",
                ]);
                const isArm = ARM_REGEX.test(architecture);
                if (MACOS_REGEX.test(platform)) {
                    setDefaultTab("brew");
                    return;
                }
                if (LINUX_REGEX.test(platform)) {
                    setDefaultTab("brew");
                    return;
                }
                if (WINDOWS_REGEX.test(platform)) {
                    setDefaultTab("windows");
                    return;
                }
            })();
        } else {
            // fall back to deprecated `navigator.platform` api
            const platform = navigator?.platform;
            // This api doesn't differentiate intel and arm based cpus...
            if (MACOS_REGEX.test(platform)) {
                setDefaultTab("brew");
                return;
            }
            if (LINUX_REGEX.test(platform)) {
                setDefaultTab("brew");
                return;
            }
            if (WINDOWS_REGEX.test(platform)) {
                setDefaultTab("windows");
            }
        }
    }, []);

    return (
        <Tabs groupId="platform" defaultValue={defaultTab} values={values}>
            {children}
        </Tabs>
    );
}
