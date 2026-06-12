---
SPDX-License-Identifier: Apache-2.0
copyright: This file is part of midnight-docs. Copyright (C) Midnight Foundation. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
sidebar_label: Wallet SDK
---

# Wallet SDK API Reference

The Midnight Wallet SDK provides a comprehensive TypeScript library for managing wallets on the Midnight Network. It supports the three token system that powers Midnight: unshielded tokens (NIGHT), shielded tokens with zero knowledge proofs, and DUST for transaction fees.

For a detailed developer guide with setup instructions and walkthroughs, see the [Wallet SDK Developer Guide](/sdks/official/wallet-developer-guide).

## Architecture

The Wallet SDK uses a modular package architecture. Each package handles a specific wallet capability.

```text
wallet-sdk-facade          Unified entry point
├── wallet-sdk-hd          Key derivation (BIP 32 / BIP 44)
├── wallet-sdk-address-format    Bech32m address encoding and decoding
├── wallet-sdk-shielded          Shielded token operations
├── wallet-sdk-unshielded-wallet Unshielded token operations
├── wallet-sdk-dust-wallet       DUST management
├── wallet-sdk-node-client       Node communication
├── wallet-sdk-indexer-client    Indexer queries
└── wallet-sdk-prover-client     Proof server interface
```

## Quick Start

### 1. Install the facade package

```bash
yarn add @midnight-ntwrk/wallet-sdk-facade
```

### 2. Create a wallet facade

```typescript
import { WalletFacade } from '@midnight-ntwrk/wallet-sdk-facade';
import { NativeWorker } from '@midnight-ntwrk/wallet-sdk-hd';

const wallet = await WalletFacade.create({
  // Configuration options
});
```

### 3. Check unshielded balance

```typescript
const unshieldedBalance = await wallet.balance().unshielded();
console.log('Unshielded balance:', unshieldedBalance);
```

## Packages

| Package | Version | Purpose |
|---------|---------|---------|
| `@midnight-ntwrk/wallet-sdk-facade` | 3.0.0 | Unified API for all wallet operations |
| `@midnight-ntwrk/wallet-sdk-unshielded-wallet` | 3.0.0 | Manages NIGHT and unshielded tokens |
| `@midnight-ntwrk/wallet-sdk-shielded` | 3.0.0 | Manages shielded tokens with ZK proofs |
| `@midnight-ntwrk/wallet-sdk-dust-wallet` | 3.0.0 | Manages DUST for transaction fees |
| `@midnight-ntwrk/wallet-sdk-hd` | 3.0.0 | Hierarchical deterministic key derivation |
| `@midnight-ntwrk/wallet-sdk-address-format` | 3.0.0 | Bech32m address encoding and decoding |
| `@midnight-ntwrk/wallet-sdk-node-client` | 3.0.0 | Communicates with Midnight nodes |
| `@midnight-ntwrk/wallet-sdk-indexer-client` | 3.0.0 | Queries the Midnight indexer |
| `@midnight-ntwrk/wallet-sdk-prover-client` | 3.0.0 | Interfaces with the proving server |

### Wallet SDK Facade

The facade provides the main entry point for wallet operations including balance queries, transfers, state management, and transaction execution.

```typescript
import { WalletFacade } from '@midnight-ntwrk/wallet-sdk-facade';

// Create a new wallet facade
const wallet = await WalletFacade.create({
  networkId: 'testnet',
  // additional config
});

// Query balances
const unshielded = await wallet.balance().unshielded();
const shielded = await wallet.balance().shielded();
const dust = await wallet.balance().dust();

// Transfer unshielded tokens
const txId = await wallet.transferUnshielded(
  recipientAddress,
  amount
);

// Fetch and accept terms and conditions
const terms = await WalletFacade.fetchTermsAndConditions(networkId);
await wallet.acceptTermsAndConditions(terms);
```

### Unshielded Wallet

Manages NIGHT and other unshielded tokens on the Midnight network.

```typescript
import { UnshieldedWallet } from '@midnight-ntwrk/wallet-sdk-unshielded-wallet';

const wallet = await UnshieldedWallet.create(config);
const balance = await wallet.balance();
const tx = await wallet.transfer(recipient, amount);
```

### Shielded Wallet

Manages shielded tokens with zero knowledge proof support.

```typescript
import { ShieldedWallet } from '@midnight-ntwrk/wallet-sdk-shielded';

// Create a shielded wallet
const shieldedWallet = await ShieldedWallet.create(config);

// Shielded transfer with ZK proof generation
const tx = await shieldedWallet.shieldedTransfer(recipient, amount);
```

### DUST Wallet

Manages DUST for transaction fee operations.

```typescript
import { DustWallet } from '@midnight-ntwrk/wallet-sdk-dust-wallet';

const dustWallet = await DustWallet.create(config);
const dustBalance = await dustWallet.balance();
// DUST is automatically used for transaction fees
```

### HD Wallet

Provides hierarchical deterministic key derivation following the BIP 32 / BIP 44 standard.

```typescript
import { NativeWorker } from '@midnight-ntwrk/wallet-sdk-hd';

// Derive keys from a seed
const seed = NativeWorker.generateSeed();
const keyPair = NativeWorker.deriveKey(seed, derivationPath);
```

### Address Format

Handles Bech32m address encoding and decoding for Midnight addresses.

```typescript
import { 
  encodeAddress, 
  decodeAddress,
  AddressFormat 
} from '@midnight-ntwrk/wallet-sdk-address-format';

const address = encodeAddress(publicKey, AddressFormat.Shielded);
const decoded = decodeAddress(address);
```

## Release History

See the [Wallet SDK release notes](/relnotes/wallet) for version history and changelog.
