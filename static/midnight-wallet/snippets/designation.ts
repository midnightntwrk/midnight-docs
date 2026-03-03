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
import * as ledger from '@midnight-ntwrk/ledger-v7';
import { Buffer } from 'buffer';
import * as rx from 'rxjs';
import { initWalletWithSeed } from '../utils.ts';
import { generateRandomSeed } from '@midnight-ntwrk/wallet-sdk-hd';

const sender = await initWalletWithSeed(
  Buffer.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex'),
);
const { wallet, unshieldedKeystore } = await initWalletWithSeed(Buffer.from(generateRandomSeed()));

await sender.wallet.waitForSyncedState();

await sender.wallet
  .transferTransaction(
    [
      {
        type: 'unshielded',
        outputs: [
          {
            amount: 500_000_000_000_000n,
            receiverAddress: await wallet.unshielded.getAddress(),
            type: ledger.nativeToken().raw,
          },
        ],
      },
    ],
    {
      shieldedSecretKeys: sender.shieldedSecretKeys,
      dustSecretKey: sender.dustSecretKey,
    },
    {
      ttl: new Date(Date.now() + 30 * 60 * 1000),
    },
  )
  .then((recipe) => sender.wallet.signRecipe(recipe, (payload) => sender.unshieldedKeystore.signData(payload)))
  .then((recipe) => sender.wallet.finalizeRecipe(recipe))
  .then((finalizedTransaction) => sender.wallet.submitTransaction(finalizedTransaction))
  .then(() =>
    rx.firstValueFrom(
      wallet.state().pipe(
        rx.filter((s) => s.isSynced),
        rx.filter((s) => {
          const nightBalance = s.unshielded.balances[ledger.nativeToken().raw] ?? 0n;
          return nightBalance > 0n;
        }),
      ),
    ),
  );

await sender.wallet.stop();
await new Promise((resolve) => setTimeout(resolve, 1 * 60 * 1000));

// #endregion

const stateBefore = await rx.firstValueFrom(wallet.state().pipe(rx.filter((s) => s.isSynced)));
console.log('Generating dust before designation:', stateBefore.dust.availableCoins.length > 0);

await wallet
  .registerNightUtxosForDustGeneration(
    stateBefore.unshielded.availableCoins,
    unshieldedKeystore.getPublicKey(),
    (payload) => unshieldedKeystore.signData(payload),
  )
  .then((recipe) => wallet.finalizeRecipe(recipe))
  .then((finalizedTransaction) => wallet.submitTransaction(finalizedTransaction));

const stateAfter = await rx.firstValueFrom(
  wallet.state().pipe(
    rx.filter((s) => s.isSynced),
    rx.filter((s) => s.dust.availableCoins.length > 0),
  ),
);

console.log('Generating dust after designation:', stateAfter.dust.availableCoins.length > 0);

await wallet.stop();
