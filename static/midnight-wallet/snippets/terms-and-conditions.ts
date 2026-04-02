// This file is part of MIDNIGHT-WALLET-SDK.
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
import { type FetchTermsAndConditionsConfiguration, WalletFacade } from '@midnight-ntwrk/wallet-sdk-facade';

const INDEXER_PORT = Number.parseInt(process.env['INDEXER_PORT'] ?? '8088', 10);
const INDEXER_HTTP_URL = `http://localhost:${INDEXER_PORT}/api/v4/graphql`;

const configuration: FetchTermsAndConditionsConfiguration = {
  indexerClientConnection: {
    indexerHttpUrl: INDEXER_HTTP_URL,
  },
};

const termsAndConditions = await WalletFacade.fetchTermsAndConditions(configuration);
console.log('Terms and Conditions URL:', termsAndConditions.url);
console.log('Terms and Conditions hash (SHA-256):', termsAndConditions.hash);

const sha256Hex = async (data: ArrayBuffer): Promise<string> => {
  const digestBuffer = await globalThis.crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digestBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

const response = await fetch(termsAndConditions.url);
const documentBytes = await response.arrayBuffer();

const digestHex = await sha256Hex(documentBytes);
const isValid = digestHex === termsAndConditions.hash;
console.log('Computed hash:', digestHex);
console.log('Hash matches:', isValid);
