---
SPDX-License-Identifier: Apache-2.0
copyright: This file is part of midnight-docs. Copyright (C) Midnight Foundation. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
title: Browser dApp with an injected wallet
description: Deploy a Compact contract, call a circuit, and read contract state from a minimal browser dApp that delegates sync, balancing, and signing to an injected wallet (Lace or 1AM) — no headless wallet sync required.
sidebar_position: 60
tags:
  - tutorials
  - dapps
  - compact
  - wallet
  - midnight-js
  - midnight-network
---

# Browser dApp with an injected wallet

This tutorial shows how to **deploy a Compact contract, call a circuit, and read contract state** from a small browser dApp that delegates the heavy work — chain sync, balancing, proving, and signing — to an **injected wallet** (Lace or 1AM) through the DApp connector API.

Many examples run a *headless* wallet that syncs the chain inside your own Node process. A fresh wallet must scan the full shielded and DUST history, which is memory-intensive and can fail before it completes on a typical machine. By letting the browser wallet sync and balance instead, your dApp only builds the transaction and asks the wallet to finalize it — so your app never runs that expensive sync. This is the same model the bulletin-board tutorial uses, generalized here to deploy, call, and read.

This guide targets the current SDK line: `midnight-js` 4.x, `compact-runtime` 0.15, ledger v8. It works on **preview** and **preprod**.

## Prerequisites

- **Node** v22.17.1 or higher, and a Vite app.
- A **compiled Compact contract**: a `managed/<name>/` directory containing `contract/index.js` (generated bindings) plus the ZK assets `keys/` and `zkir/`. Pin `compactc`, the language version, and the runtime together.
- A **wallet extension** (Lace or 1AM) installed in your browser, unlocked, set to **preview** (or preprod), with the connected account funded with tNIGHT and registered for DUST (DUST pays fees).
- A **proof server** — either your own (`docker run -p 6300:6300 midnightntwrk/proof-server:<tag>`) or the one the wallet reports via `getConfiguration()`.

## 1. Dependencies and Vite setup

Install the 4.x SDK packages (match the line your contract was compiled against):

```jsonc
"@midnight-ntwrk/compact-js": "^2.5.0",
"@midnight-ntwrk/compact-runtime": "^0.15.0",
"@midnight-ntwrk/dapp-connector-api": "^4.0.0",
"@midnight-ntwrk/ledger-v8": "^8.0.0",
"@midnight-ntwrk/midnight-js-contracts": "^4.0.0",
"@midnight-ntwrk/midnight-js-fetch-zk-config-provider": "^4.0.0",
"@midnight-ntwrk/midnight-js-http-client-proof-provider": "^4.0.0",
"@midnight-ntwrk/midnight-js-indexer-public-data-provider": "^4.0.0",
"@midnight-ntwrk/midnight-js-network-id": "^4.0.0",
"@midnight-ntwrk/midnight-js-types": "^4.0.0",
"semver": "^7"
```

Add browser polyfills before any SDK import:

```ts
import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;
// some libraries read process.env.NODE_ENV in the browser:
(globalThis as any).process = { env: { NODE_ENV: import.meta.env.MODE } };
```

The on-chain runtime is WebAssembly, so Vite needs WASM and top-level-await support:

```ts
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  build: { target: 'esnext' },
  plugins: [wasm(), topLevelAwait()],
  optimizeDeps: { exclude: ['@midnight-ntwrk/onchain-runtime-v3'] },
});
```

## 2. Serve the ZK assets

The browser fetches prover and verifier keys and ZKIR over HTTP with `FetchZkConfigProvider`, which resolves the circuit assets relative to the web root. Copy your compiled assets into the app's `public/` directory:

```text
public/keys/   from  managed/<name>/keys
public/zkir/   from  managed/<name>/zkir
```

## 3. Discover and connect the wallet

The connector standard injects providers under `window.midnight`. Discover any compatible provider (do not hard-code a wallet name) and poll for it, since extensions can inject shortly after the page loads:

```ts
import semver from 'semver';
import type { ConnectedAPI, InitialAPI } from '@midnight-ntwrk/dapp-connector-api';

const pickWallet = (): InitialAPI | undefined => {
  const w = (window as any).midnight;
  if (!w) return undefined;
  const v4 = Object.values(w).find((x: any) => x?.apiVersion && semver.satisfies(x.apiVersion, '4.x'));
  return (v4 as InitialAPI) ?? (Object.values(w).find((x: any) => typeof x?.connect === 'function') as InitialAPI);
};

const waitForWallet = async (ms = 6000): Promise<InitialAPI | undefined> => {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    const p = pickWallet();
    if (p) return p;
    await new Promise((r) => setTimeout(r, 150));
  }
  return undefined;
};

const initial = await waitForWallet();
const api: ConnectedAPI = await initial!.connect('preview');   // prompts the user to approve
const config = await api.getConfiguration();                   // indexerUri, indexerWsUri, proverServerUri
const shielded = await api.getShieldedAddresses();             // shieldedCoinPublicKey, shieldedEncryptionPublicKey
```

## 4. Build the providers (wallet-delegated)

The key step: `balanceTx` serializes the unbound transaction and passes it to the wallet's `balanceUnsealedTransaction`. The wallet balances, proves, and uses its own synced state, then returns the finalized transaction. Your app never syncs the chain.

```ts
import { FetchZkConfigProvider } from '@midnight-ntwrk/midnight-js-fetch-zk-config-provider';
import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { Binding, FinalizedTransaction, Proof, SignatureEnabled, Transaction } from '@midnight-ntwrk/ledger-v8';
import { fromHex, toHex } from '@midnight-ntwrk/compact-runtime';
import type { UnboundTransaction } from '@midnight-ntwrk/midnight-js-types';

const zk = new FetchZkConfigProvider<string>(window.location.origin, fetch.bind(window));

const providers = {
  privateStateProvider: inMemoryPrivateStateProvider(), // a simple in-memory implementation is fine for a demo
  zkConfigProvider: zk,
  proofProvider: httpClientProofProvider(config.proverServerUri!, zk),
  publicDataProvider: indexerPublicDataProvider(config.indexerUri, config.indexerWsUri),
  walletProvider: {
    getCoinPublicKey: () => shielded.shieldedCoinPublicKey,
    getEncryptionPublicKey: () => shielded.shieldedEncryptionPublicKey,
    balanceTx: async (tx: UnboundTransaction): Promise<FinalizedTransaction> => {
      const received = await api.balanceUnsealedTransaction(toHex(tx.serialize()));
      return Transaction.deserialize<SignatureEnabled, Proof, Binding>('signature', 'proof', 'binding', fromHex(received.tx));
    },
  },
  midnightProvider: {
    submitTx: async (tx: FinalizedTransaction) => {
      await api.submitTransaction(toHex(tx.serialize()));
      return tx.identifiers()[0];
    },
  },
};
```

## 5. Deploy a contract

```ts
import { CompiledContract } from '@midnight-ntwrk/compact-js';
import { deployContract } from '@midnight-ntwrk/midnight-js-contracts';
import * as MyContract from './managed/<name>/contract/index.js';

const compiled = CompiledContract.make('myContract', (MyContract as any).Contract).pipe(
  // provide any witnesses your contract declares; for example a source of randomness:
  CompiledContract.withWitnesses({
    createRandomNumber: ({ privateState }: any) => {
      const b = new Uint8Array(32);
      crypto.getRandomValues(b);
      return [privateState, b];
    },
  }),
  CompiledContract.withCompiledFileAssets('myContract'),
);

const deployed = await deployContract(providers as any, {
  compiledContract: compiled,
  privateStateId: 'myPrivateState',
  initialPrivateState: {},
});

console.log('contract address:', deployed.deployTxData.public.contractAddress);
```

## 6. Call a circuit

Use `findDeployedContract` to attach to an existing contract, then call any impure circuit by name through `callTx`:

```ts
import { findDeployedContract } from '@midnight-ntwrk/midnight-js-contracts';

const deployed = await findDeployedContract(providers as any, {
  contractAddress,
  compiledContract: compiled,
  privateStateId: 'myPrivateState',
  initialPrivateState: {},
});

const txData = await (deployed as any).callTx.myCircuit();
console.log('tx hash:', txData.public.txHash);
```

## 7. Read contract state (no wallet required)

Reading on-chain state is public. Query the indexer and decode the result with the contract's generated `ledger` function:

```ts
const pdp = indexerPublicDataProvider(
  'https://indexer.preview.midnight.network/api/v3/graphql',
  'wss://indexer.preview.midnight.network/api/v3/graphql/ws',
);

const state = await pdp.queryContractState(contractAddress);
const led = (MyContract as any).ledger(state!.data);
// read your ledger fields, for example a Counter or a Map:
console.log('size:', led.items?.size?.());
```

## Troubleshooting

- **Faucet returns "resubmit later" on a brand-new address.** The faucet rate-limit is keyed to the recipient address (about 24 hours), and a failed request still counts. Use a fresh address to retry. To confirm a drip landed without a wallet, query the indexer's `unshieldedTransactions(address:)` subscription, or `transactions(offset: { identifier })` if you have the transaction id — the top-level GraphQL API has no address-balance query.
- **`window.midnight` is undefined even though the extension is installed.** The extension's content-script/background messaging can stall (the console may show `orphaned data for stream` messages). Fully restart the browser to revive the extension's background worker, then reload. Also confirm the dApp tab and the extension are in the same browser profile.
- **A helper library fails to resolve under bare Node** because it uses extensionless ESM imports. Bundle through Vite or esbuild rather than running with raw `node` — both resolve extensionless imports.
- **Version drift.** The `compact-runtime` your contract was compiled against must match the SDK line you import (here 0.15 with ledger v8 and `midnight-js` 4.x). Mismatches between `compactc`, the language version, and the runtime are the most common source of errors.

## Summary

You connected an injected wallet, built providers that delegate balancing and signing to it, then deployed a contract, called a circuit, and read state — all from the browser, without running a headless wallet sync. The same pattern works for any Compact contract: swap in your compiled bindings and ZK assets, and call your own circuits by name.
