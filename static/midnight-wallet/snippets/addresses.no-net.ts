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
import {
  ShieldedAddress,
  UnshieldedAddress,
  MidnightBech32m,
  DustAddress,
  ShieldedEncryptionPublicKey,
  ShieldedCoinPublicKey,
  mainnet,
} from '@midnight-ntwrk/wallet-sdk-address-format';
import type { NetworkId } from '@midnight-ntwrk/wallet-sdk-address-format';
import * as ledger from '@midnight-ntwrk/ledger-v7';

const networkId: NetworkId = 'undeployed';

// seeds/keys below are derived from the testing seed 0000000000000000000000000000000000000000000000000000000000000001
const unshieldedSecretKey = Buffer.from('b76bd8d92eb76098e938051af9d6bf2c81d8bf47ead2aa5442ca60c04346378b', 'hex');
const shieldedSeed = Buffer.from('a33865674c03ca1f6c4eb3f6b56625dce0accc96d2ca52114876a58773f5ecab', 'hex');
const dustSeed = Buffer.from('cab391b2eaaf459bd7ef54c461e7fc4e2377afb12fbdd532b0d63b0f48803534', 'hex');

const unshieldedAddress = new UnshieldedAddress(
  Buffer.from(ledger.addressFromKey(ledger.signatureVerifyingKey(unshieldedSecretKey.toString('hex'))), 'hex'),
);
const unshieldedAddressBech32m = MidnightBech32m.encode(networkId, unshieldedAddress).toString();
const unshieldedAddressParsed: UnshieldedAddress = MidnightBech32m.parse(unshieldedAddressBech32m).decode(
  UnshieldedAddress,
  networkId,
);

console.log('unshielded address', unshieldedAddressBech32m);
console.log(' are unshielded addresses equal?', unshieldedAddress.equals(unshieldedAddressParsed));

// same for mainnet:
const unshieldedAddressBech32mMainnet = MidnightBech32m.encode(mainnet, unshieldedAddress).toString();
const unshieldedAddressParsedMainnet: UnshieldedAddress = MidnightBech32m.parse(unshieldedAddressBech32mMainnet).decode(
  UnshieldedAddress,
  mainnet,
);

console.log('mainnet unshielded address', unshieldedAddressBech32mMainnet);
console.log(' are mainnet unshielded addresses equal?', unshieldedAddress.equals(unshieldedAddressParsedMainnet));

const shieldedKeys = ledger.ZswapSecretKeys.fromSeed(shieldedSeed);
const shieldedAddress = new ShieldedAddress(
  new ShieldedCoinPublicKey(Buffer.from(shieldedKeys.coinPublicKey, 'hex')),
  new ShieldedEncryptionPublicKey(Buffer.from(shieldedKeys.encryptionPublicKey, 'hex')),
);
const shieldedAddressBech32m = MidnightBech32m.encode(networkId, shieldedAddress).toString();
const shieldedAddressParsed: ShieldedAddress = MidnightBech32m.parse(shieldedAddressBech32m).decode(
  ShieldedAddress,
  networkId,
);

console.log('shielded address', shieldedAddressBech32m);
console.log(' are shielded addresses equal?', shieldedAddress.equals(shieldedAddressParsed));

const dustSecretKey = ledger.DustSecretKey.fromSeed(dustSeed);
const dustAddress = new DustAddress(dustSecretKey.publicKey);
const dustAddressBech32m = MidnightBech32m.encode(networkId, dustAddress).toString();
const dustAddressParsed: DustAddress = MidnightBech32m.parse(dustAddressBech32m).decode(DustAddress, networkId);

console.log('dust address', dustAddressBech32m);
console.log(' are dust addresses equal?', dustAddress.equals(dustAddressParsed));
