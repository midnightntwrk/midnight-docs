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
import { generateRandomSeed } from '@midnight-ntwrk/wallet-sdk-hd';
import { Buffer } from 'buffer';
import * as rx from 'rxjs';
import { initWalletWithSeed } from '../utils.ts';

const sender = await initWalletWithSeed(
  Buffer.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex'),
);
const receiver = await initWalletWithSeed(Buffer.from(generateRandomSeed()));

const initialSenderState = await rx.firstValueFrom(sender.wallet.state().pipe(rx.filter((s) => s.isSynced)));
const initialBalance = initialSenderState.unshielded.balances[ledger.nativeToken().raw] ?? 0n;

const makeTransactionBlueprint = () => {
  const unshieldedOffer = ledger.UnshieldedOffer.new(
    [],
    [
      {
        value: initialBalance,
        owner: receiver.unshieldedKeystore.getAddress(),
        type: ledger.nativeToken().raw,
      },
    ],
    [],
  );
  const intent = ledger.Intent.new(new Date(Date.now() + 30 * 60 * 1000));
  intent.fallibleUnshieldedOffer = unshieldedOffer;
  return ledger.Transaction.fromParts('undeployed', undefined, undefined, intent);
};

await sender.wallet
  .balanceUnprovenTransaction(
    makeTransactionBlueprint(),
    {
      shieldedSecretKeys: sender.shieldedSecretKeys,
      dustSecretKey: sender.dustSecretKey,
    },
    {
      ttl: new Date(Date.now() + 30 * 60 * 1000),
    },
  )
  .then((recipe) => {
    return sender.wallet.signRecipe(recipe, (payload) => sender.unshieldedKeystore.signData(payload));
  })
  .then((tx) => sender.wallet.finalizeRecipe(tx))
  .then((finalizedTransaction) => sender.wallet.submitTransaction(finalizedTransaction));

const finalSenderState = await rx.firstValueFrom(sender.wallet.state().pipe(rx.filter((s) => s.isSynced)));
const receiverState = await rx.firstValueFrom(
  receiver.wallet.state().pipe(
    rx.filter((s) => s.isSynced),
    rx.filter((s) => (s.unshielded.balances[ledger.nativeToken().raw] ?? 0n) !== 0n),
  ),
);

console.log('Unshielded transfer by balancing completed');
console.log(
  'Did sender send all its Night?',
  (finalSenderState.unshielded.balances[ledger.nativeToken().raw] ?? 0n) === 0n,
);
console.log(
  'Did receiver receive all the Night?',
  (receiverState.unshielded.balances[ledger.nativeToken().raw] ?? 0n) === initialBalance,
);

await receiver.wallet.stop();
await sender.wallet.stop();
