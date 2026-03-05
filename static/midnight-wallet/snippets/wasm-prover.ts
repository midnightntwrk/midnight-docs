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
import { DustWallet } from '@midnight-ntwrk/wallet-sdk-dust-wallet';
import { type DefaultConfiguration, WalletFacade } from '@midnight-ntwrk/wallet-sdk-facade';
import { HDWallet, Roles } from '@midnight-ntwrk/wallet-sdk-hd';
import { ShieldedWallet } from '@midnight-ntwrk/wallet-sdk-shielded';
import {
  createKeystore,
  InMemoryTransactionHistoryStorage,
  PublicKey,
  UnshieldedWallet,
} from '@midnight-ntwrk/wallet-sdk-unshielded-wallet';
import { Buffer } from 'buffer';
import { pick } from 'lodash-es';
import { makeWasmProvingService } from '@midnight-ntwrk/wallet-sdk-capabilities';

const INDEXER_PORT = Number.parseInt(process.env['INDEXER_PORT'] ?? '8088', 10);
const NODE_PORT = Number.parseInt(process.env['NODE_PORT'] ?? '9944', 10);
const INDEXER_HTTP_URL = `http://localhost:${INDEXER_PORT}/api/v3/graphql`;
const INDEXER_WS_URL = `ws://localhost:${INDEXER_PORT}/api/v3/graphql/ws`;

const configuration: DefaultConfiguration = {
  networkId: 'undeployed',
  costParameters: {
    additionalFeeOverhead: 300_000_000_000_000n,
    feeBlocksMargin: 5,
  },
  relayURL: new URL(`ws://localhost:${NODE_PORT}`),
  indexerClientConnection: {
    indexerHttpUrl: INDEXER_HTTP_URL,
    indexerWsUrl: INDEXER_WS_URL,
  },
  txHistoryStorage: new InMemoryTransactionHistoryStorage(),
};

const initWalletWithSeed = async (seed: Buffer) => {
  const hdWallet = HDWallet.fromSeed(seed);

  if (hdWallet.type !== 'seedOk') {
    throw new Error('Failed to initialize HDWallet');
  }

  const derivationResult = hdWallet.hdWallet
    .selectAccount(0)
    .selectRoles([Roles.Zswap, Roles.NightExternal, Roles.Dust])
    .deriveKeysAt(0);

  if (derivationResult.type !== 'keysDerived') {
    throw new Error('Failed to derive keys');
  }

  hdWallet.hdWallet.clear();

  const shieldedSecretKeys = ledger.ZswapSecretKeys.fromSeed(derivationResult.keys[Roles.Zswap]);
  const dustSecretKey = ledger.DustSecretKey.fromSeed(derivationResult.keys[Roles.Dust]);
  const unshieldedKeystore = createKeystore(derivationResult.keys[Roles.NightExternal], configuration.networkId);

  const wallet: WalletFacade = await WalletFacade.init({
    configuration,
    shielded: (config) => ShieldedWallet(config).startWithSecretKeys(shieldedSecretKeys),
    unshielded: (config) => UnshieldedWallet(config).startWithPublicKey(PublicKey.fromKeyStore(unshieldedKeystore)),
    dust: (config) =>
      DustWallet(config).startWithSecretKey(dustSecretKey, ledger.LedgerParameters.initialParameters().dust),
    provingService: () => makeWasmProvingService(),
  });

  await wallet.start(shieldedSecretKeys, dustSecretKey);

  return { wallet, shieldedSecretKeys, dustSecretKey, unshieldedKeystore };
};

const { wallet } = await initWalletWithSeed(
  Buffer.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex'),
);
const syncedState = await wallet.waitForSyncedState();
console.log('Synced state:');
console.dir(
  {
    shielded: pick(syncedState.shielded, [
      'balances',
      'availableCoins',
      'pendingCoins',
      'totalCoins',
      'progress',
      'coinPublicKey',
      'encryptionPublicKey',
      'address',
    ]),
    unshielded: pick(syncedState.unshielded, [
      'balances',
      'availableCoins',
      'pendingCoins',
      'totalCoins',
      'progress',
      'address',
    ]),
    dust: pick(syncedState.dust, ['totalCoins', 'availableCoins', 'pendingCoins', 'progress', 'publicKey', 'address']),
  },
  { depth: null },
);
await wallet.stop();
