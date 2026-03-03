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
import * as ledger from '@midnight-ntwrk/ledger-v7';
import type { Role } from '@midnight-ntwrk/wallet-sdk-hd';
import { AccountKey, HDWallet, Roles } from '@midnight-ntwrk/wallet-sdk-hd';
import { Buffer } from 'buffer';

function deriveRoleKey(accountKey: AccountKey, role: Role, addressIndex: number = 0): Buffer {
  const result = accountKey.selectRole(role).deriveKeyAt(addressIndex);
  if (result.type === 'keyDerived') {
    return Buffer.from(result.key);
  }

  // There is small possibility of the derivation failing, so we retry with the next index as specified
  return deriveRoleKey(accountKey, role, addressIndex + 1);
}

function deriveAllKeys(seed: Uint8Array) {
  const hdWallet = HDWallet.fromSeed(seed);

  if (hdWallet.type !== 'seedOk') {
    throw new Error('Failed to derive keys');
  }

  const account = hdWallet.hdWallet.selectAccount(0);
  const shieldedSeed = deriveRoleKey(account, Roles.Zswap);
  const dustSeed = deriveRoleKey(account, Roles.Dust);
  const nightKey = deriveRoleKey(account, Roles.NightExternal);

  hdWallet.hdWallet.clear(); // Clear the HDWallet to avoid holding the private key in memory for longer than needed

  return {
    shielded: { seed: shieldedSeed, keys: ledger.ZswapSecretKeys.fromSeed(shieldedSeed) },
    dust: { seed: dustSeed, key: ledger.DustSecretKey.fromSeed(dustSeed) },
    night: nightKey,
  };
}

const seed = Buffer.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex'); // or generateRandomSeed() from @midnight-ntwrk/wallet-sdk-hd
const derivedKeys = deriveAllKeys(seed);
seed.fill(0);

console.log('seed', seed.toString('hex'));
console.log('unshielded(Night) secret key', derivedKeys.night.toString('hex'));
console.log('shielded:');
console.log('  seed', derivedKeys.shielded.seed.toString('hex'));
console.log(
  '  coin secret key',
  Buffer.from(derivedKeys.shielded.keys.coinSecretKey.yesIKnowTheSecurityImplicationsOfThis_serialize()).toString(
    'hex',
  ),
);
console.log(
  '  encryption secret key',
  Buffer.from(derivedKeys.shielded.keys.encryptionSecretKey.yesIKnowTheSecurityImplicationsOfThis_serialize()).toString(
    'hex',
  ),
);
console.log('dust:');
console.log('  seed', derivedKeys.dust.seed.toString('hex'));
console.log('  public key', derivedKeys.dust.key.publicKey.toString(16));
