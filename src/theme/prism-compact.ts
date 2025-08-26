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

// @ts-nocheck

Prism.languages.compact = {
  comment: {
    pattern: /\/\/(?:[^\r\n\\])*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  string: {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "class-name":
    /\b(?:Bytes|Boolean|Field|Opaque|Uint|Vector|Counter|Set|List|Map|MerkleTree|HistoricMerkleTree)\b/,
  keyword:
    /\b(?:as|assert|circuit|const|constructor|contract|default|disclose|else|enum|export|fold|for|if|import|include|ledger|map|module|of|pad|pragma|prefix|pure|return|sealed|struct|witness)\b/,
  function: /\b[a-z_]\w*(?=\s*(\[[a-zA-Z_0-9,\s]*\]\s*)?\()/i,
  number:
    /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  boolean: /\b(?:false|true)\b/i
};
