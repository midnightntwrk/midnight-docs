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
// #region setup
import { Buffer } from 'buffer';
import * as rx from 'rxjs';
import { initWalletWithSeed } from '../utils.ts';
import { generateRandomSeed } from '@midnight-ntwrk/wallet-sdk-hd';

const sender = await initWalletWithSeed(
  Buffer.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex'),
);
const receiver = await initWalletWithSeed(Buffer.from(generateRandomSeed()));

const { unshielded: senderUnshieldedState } = await sender.wallet.waitForSyncedState();

const receiverStateBefore = await rx.firstValueFrom(receiver.wallet.state().pipe(rx.filter((s) => s.isSynced)));
console.log('Generating dust before designation:', receiverStateBefore.dust.availableCoins.length > 0);

await sender.wallet
  .registerNightUtxosForDustGeneration(
    [senderUnshieldedState.availableCoins[0]],
    sender.unshieldedKeystore.getPublicKey(),
    (payload) => sender.unshieldedKeystore.signData(payload),
    receiverStateBefore.dust.address,
  )
  .then((recipe) =>
    sender.wallet.balanceUnprovenTransaction(
      recipe.transaction,
      {
        shieldedSecretKeys: sender.shieldedSecretKeys,
        dustSecretKey: sender.dustSecretKey,
      },
      {
        ttl: new Date(Date.now() + 30 * 60 * 1000),
        tokenKindsToBalance: ['dust'],
      },
    ),
  )
  .then((recipe) => sender.wallet.finalizeRecipe(recipe))
  .then((finalizedTransaction) => sender.wallet.submitTransaction(finalizedTransaction));

const receiverStateAfter = await rx.firstValueFrom(
  receiver.wallet.state().pipe(
    rx.filter((s) => s.isSynced),
    rx.filter((s) => s.dust.availableCoins.length > 0),
  ),
);

console.log('Generating dust after designation:', receiverStateAfter.dust.availableCoins.length > 0);

await receiver.wallet.stop();
await sender.wallet.stop();
