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
import { Buffer } from 'buffer';
import * as rx from 'rxjs';
import { initWalletWithSeed } from '../utils.ts';
import * as ledger from '@midnight-ntwrk/ledger-v7';
import { FacadeState } from '@midnight-ntwrk/wallet-sdk-facade';

const alice = await initWalletWithSeed(
  Buffer.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex'),
);
const bob = await initWalletWithSeed(
  Buffer.from('0000000000000000000000000000000000000000000000000000000000000002', 'hex'),
);

const aliceInitialState = await alice.wallet.waitForSyncedState();
const bobInitialState = await bob.wallet.waitForSyncedState();

const shieldedToken1 = '0000000000000000000000000000000000000000000000000000000000000001';
const shieldedToken2 = '0000000000000000000000000000000000000000000000000000000000000002';

console.log(
  'Does Alice have specific shielded coin before swap?',
  aliceInitialState.shielded.availableCoins.some((c) => c.coin.type === shieldedToken2 && c.coin.value === 1_000_000n),
);
console.log(
  'Does Bob have specific shielded coin before swap?',
  bobInitialState.shielded.availableCoins.some((c) => c.coin.type === shieldedToken1 && c.coin.value === 1_000_000n),
);

const aliceSwapTx: ledger.FinalizedTransaction = await alice.wallet
  .initSwap(
    { shielded: { [shieldedToken1]: 1_000_000n } },
    [
      {
        type: 'shielded',
        outputs: [
          {
            type: shieldedToken2,
            amount: 1_000_000n,
            receiverAddress: aliceInitialState.shielded.address,
          },
        ],
      },
    ],
    {
      shieldedSecretKeys: alice.shieldedSecretKeys,
      dustSecretKey: alice.dustSecretKey,
    },
    {
      ttl: new Date(Date.now() + 30 * 60 * 1000),
    },
  )
  .then((recipe) => alice.wallet.finalizeRecipe(recipe));

await bob.wallet
  .balanceFinalizedTransaction(
    aliceSwapTx,
    {
      shieldedSecretKeys: bob.shieldedSecretKeys,
      dustSecretKey: bob.dustSecretKey,
    },
    {
      ttl: new Date(Date.now() + 30 * 60 * 1000),
    },
  )
  .then((recipe) => bob.wallet.finalizeRecipe(recipe))
  .then((tx) => bob.wallet.submitTransaction(tx));

const didShieldedChange = (state: FacadeState, initialState: FacadeState) => {
  const currentAppliedIndex = state.shielded.progress?.appliedIndex ?? 0n;
  const initialAppliedIndex = initialState.shielded.progress?.appliedIndex ?? 0n;
  return currentAppliedIndex > initialAppliedIndex;
};

const aliceFinalState = await rx.firstValueFrom(
  alice.wallet.state().pipe(
    rx.filter((s) => s.isSynced),
    rx.filter((s) => didShieldedChange(s, aliceInitialState)),
  ),
);

const bobFinalState = await rx.firstValueFrom(
  bob.wallet.state().pipe(
    rx.filter((s) => s.isSynced),
    rx.filter((s) => didShieldedChange(s, bobInitialState)),
  ),
);

console.log(
  'Does Alice have specific shielded coin after swap?',
  aliceFinalState.shielded.availableCoins.some((c) => c.coin.type === shieldedToken2 && c.coin.value === 1_000_000n),
);
console.log(
  'Does Bob have specific shielded coin after swap?',
  bobFinalState.shielded.availableCoins.some((c) => c.coin.type === shieldedToken1 && c.coin.value === 1_000_000n),
);

await alice.wallet.stop();
await bob.wallet.stop();
