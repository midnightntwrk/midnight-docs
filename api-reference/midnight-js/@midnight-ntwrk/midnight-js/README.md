# midnight-js

[**Midnight.js API Reference v4.0.4**](../../README.md)

***

[Midnight.js API Reference](../../packages.md) / @midnight-ntwrk/midnight-js

# Midnight.js

Barrel package that provides a single entry point to the core components of Midnight.js. Import all core modules from one package instead of installing them individually.

## Installation

```bash
yarn add @midnight-ntwrk/midnight-js
```

## Quick Start

```typescript
import { contracts, networkId, types, utils } from '@midnight-ntwrk/midnight-js';

networkId.setNetworkId('testnet');

const deployed = await contracts.deployContract(providers, {
  compiledContract: myContract,
  privateStateId: 'my-state',
  initialPrivateState: { counter: 0n }
});
```

## Modules

| Module       | Package                                  | Description                                    |
| ------------ | ---------------------------------------- | ---------------------------------------------- |
| `contracts`  | `@midnight-ntwrk/midnight-js-contracts`  | Contract deployment and interaction utilities   |
| `networkId`  | `@midnight-ntwrk/midnight-js-network-id` | Network identifier management                  |
| `types`      | `@midnight-ntwrk/midnight-js-types`      | Shared types, interfaces, and provider contracts|
| `utils`      | `@midnight-ntwrk/midnight-js-utils`      | Hex encoding, address validation, and utilities |

## Sub-path Imports

Each module is also available as a sub-path import for tree-shaking:

```typescript
import { deployContract, findDeployedContract } from '@midnight-ntwrk/midnight-js/contracts';
import { setNetworkId, getNetworkId } from '@midnight-ntwrk/midnight-js/network-id';
import { type ProofProvider, type WalletProvider } from '@midnight-ntwrk/midnight-js/types';
import { toHex, fromHex } from '@midnight-ntwrk/midnight-js/utils';
```

## Exports

```typescript
// Namespace imports (all modules)
import { contracts, networkId, types, utils } from '@midnight-ntwrk/midnight-js';

// Sub-path imports (individual modules)
import { ... } from '@midnight-ntwrk/midnight-js/contracts';
import { ... } from '@midnight-ntwrk/midnight-js/network-id';
import { ... } from '@midnight-ntwrk/midnight-js/types';
import { ... } from '@midnight-ntwrk/midnight-js/utils';
```

## Resources

- [Midnight Network](https://midnight.network)
- [Developer Hub](https://midnight.network/developer-hub)

## Terms & License

By using this package, you agree to [Midnight's Terms and Conditions](https://midnight.network/static/terms.pdf) and [Privacy Policy](https://midnight.network/static/privacy-policy.pdf).

Licensed under [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).
