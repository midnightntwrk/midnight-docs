# Midnight JS API

**Midnight.js API Reference v4.0.4**

***

# Midnight.js

TypeScript framework for building privacy-preserving dApps on the Midnight blockchain.

Midnight.js provides tools for deploying and interacting with smart contracts, managing encrypted private state, generating zero-knowledge proofs, and submitting transactions to the Midnight network.

## Architecture

Midnight.js uses a **modular provider pattern** where each capability is pluggable:

```
MidnightProviders
├── privateStateProvider   — Encrypted local state storage
├── publicDataProvider     — Blockchain data queries via GraphQL
├── zkConfigProvider       — ZK artifact retrieval (prover/verifier keys)
├── proofProvider          — Zero-knowledge proof generation
├── walletProvider         — Transaction balancing and signing
├── midnightProvider       — Transaction submission to the network
└── loggerProvider         — Optional diagnostics logging
```

## Packages

### Core

| Package | Purpose |
|---------|---------|
| `@midnight-ntwrk/midnight-js-types` | Shared types, interfaces, and provider contracts |
| `@midnight-ntwrk/midnight-js-contracts` | Contract deployment, circuit calls, and transaction submission |
| `@midnight-ntwrk/midnight-js-network-id` | Network identifier configuration for runtime and ledger WASM APIs |
| `@midnight-ntwrk/midnight-js-utils` | Shared utilities (hex encoding, bech32m, assertions) |

### Providers

| Package | Purpose |
|---------|---------|
| `@midnight-ntwrk/midnight-js-indexer-public-data-provider` | GraphQL-based blockchain data provider (queries and subscriptions) |
| `@midnight-ntwrk/midnight-js-level-private-state-provider` | AES-256-GCM encrypted persistent state storage via [LevelDB](https://github.com/Level/level) |
| `@midnight-ntwrk/midnight-js-http-client-proof-provider` | HTTP client for the Midnight proof server |
| `@midnight-ntwrk/midnight-js-fetch-zk-config-provider` | Browser-compatible ZK artifact provider using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) |
| `@midnight-ntwrk/midnight-js-node-zk-config-provider` | Node.js filesystem-based ZK artifact provider |
| `@midnight-ntwrk/midnight-js-logger-provider` | Application-specific [Pino](https://github.com/pinojs/pino) logger configuration |

### Tooling

| Package | Purpose |
|---------|---------|
| `@midnight-ntwrk/midnight-js-compact` | Compact compiler manager for contract compilation |

## Quick Start

### 1. Configure the network

```typescript
import { setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';

setNetworkId('testnet');
```

### 2. Assemble providers

```typescript
import { levelPrivateStateProvider } from '@midnight-ntwrk/midnight-js-level-private-state-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { FetchZkConfigProvider } from '@midnight-ntwrk/midnight-js-fetch-zk-config-provider';

const zkConfigProvider = new FetchZkConfigProvider(zkArtifactsUrl);

const providers: MidnightProviders = {
  privateStateProvider: levelPrivateStateProvider({
    privateStoragePasswordProvider: () => password,
    accountId: walletAddress,
  }),
  publicDataProvider: indexerPublicDataProvider(queryUrl, subscriptionUrl),
  zkConfigProvider,
  proofProvider: httpClientProofProvider(proofServerUrl, zkConfigProvider),
  walletProvider,    // from @midnight-ntwrk/wallet-sdk-facade
  midnightProvider,  // from @midnight-ntwrk/wallet-sdk-facade
};
```

### 3. Deploy and interact with a contract

```typescript
import { deployContract, findDeployedContract } from '@midnight-ntwrk/midnight-js-contracts';

const deployed = await deployContract(providers, {
  compiledContract,
  privateStateId: 'my-state',
  initialPrivateState: { counter: 0n },
});

const result = await deployed.callTx.increment();
```

### 4. Query state

```typescript
import { getStates, getPublicStates } from '@midnight-ntwrk/midnight-js-contracts';

const states = await getStates(providers, contractAddress, privateStateId);
const publicStates = await getPublicStates(providers, contractAddress);
```

## Key Concepts

### Contract Model

| Term | Description |
|------|-------------|
| **Circuit** | Smart contract function that executes locally and generates a zero-knowledge proof |
| **Witness** | Private computation that runs on the end-user's device |
| **Private state** | User-local state updated by circuits — never stored on-chain |
| **Ledger state** | On-chain public contract state |

### ZK Artifacts

| Artifact | Role |
|----------|------|
| **Prover key** | Binary used to create zero-knowledge proofs |
| **Verifier key** | Binary used for on-chain proof verification |
| **ZKIR** | Zero-Knowledge Intermediate Representation of compiled contracts |

### Transaction Flow

```
1. Execute circuit locally  →  Unproven transaction
2. Generate ZK proofs       →  ProofProvider
3. Balance transaction       →  WalletProvider
4. Submit to network         →  MidnightProvider
5. Wait for finalization     →  PublicDataProvider
```

### Transaction Status

| Status | Meaning |
|--------|---------|
| `SucceedEntirely` | All transaction segments succeeded |
| `FailFallible` | Guaranteed portion succeeded, fallible portion failed |
| `FailEntirely` | Transaction is invalid |

## Private State Security

- **Encryption**: AES-256-GCM at rest
- **Key derivation**: PBKDF2-SHA256 (600,000 iterations)
- **Isolation**: Account-scoped storage keyed by SHA-256 hash of wallet address
- **No built-in recovery**: Production deployments require a backup strategy
