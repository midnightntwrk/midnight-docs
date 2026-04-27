# midnight-js-protocol

[**Midnight.js API Reference v4.0.4**](../../README.md)

***

[Midnight.js API Reference](../../packages.md) / @midnight-ntwrk/midnight-js-protocol

# Protocol

Version-agnostic re-exports of Midnight protocol packages. Decouples framework consumers from specific protocol version numbers, so that protocol upgrades require changes only in this package.

## Versioning Contract

**This package must never include a protocol version number in its name.** The package name `@midnight-ntwrk/midnight-js-protocol` is permanent. If the package were renamed to `midnight-js-protocol-v2` or similar, every consumer import would need updating, defeating the purpose of this abstraction.

Protocol version changes are handled through:
- **semver** (npm package version): major bump when underlying protocol packages change in a breaking way
- **internal re-exports**: this package updates which concrete protocol packages it re-exports

## Installation

```bash
yarn add @midnight-ntwrk/midnight-js-protocol
```

## Usage

Import protocol types through version-agnostic subpaths:

```typescript
import { type ContractAddress } from '@midnight-ntwrk/midnight-js-protocol/ledger';
import { type CompactRuntime } from '@midnight-ntwrk/midnight-js-protocol/compact-runtime';
import { Contract } from '@midnight-ntwrk/midnight-js-protocol/compact-js';
import { type OnChainRuntime } from '@midnight-ntwrk/midnight-js-protocol/onchain-runtime';
import { createPlatform } from '@midnight-ntwrk/midnight-js-protocol/platform-js';
```

## Sub-path Exports

| Sub-path | Re-exports | Description |
| -------- | ---------- | ----------- |
| `./ledger` | `@midnight-ntwrk/ledger-v8` | Ledger types and transaction primitives |
| `./compact-runtime` | `@midnight-ntwrk/compact-runtime` | Compact contract runtime utilities |
| `./compact-js` | `@midnight-ntwrk/compact-js` | Compact JS bindings |
| `./compact-js/effect` | `@midnight-ntwrk/compact-js/effect` | Effect-based Compact bindings |
| `./compact-js/effect/Contract` | `@midnight-ntwrk/compact-js/effect/Contract` | Effect-based Contract module |
| `./onchain-runtime` | `@midnight-ntwrk/onchain-runtime-v3` | On-chain runtime (Impact VM) |
| `./platform-js` | `@midnight-ntwrk/platform-js` | Platform services |
| `./platform-js/effect/Configuration` | `@midnight-ntwrk/platform-js/effect/Configuration` | Effect-based configuration |
| `./platform-js/effect/ContractAddress` | `@midnight-ntwrk/platform-js/effect/ContractAddress` | Effect-based contract address resolution |

## ESLint Enforcement

An ESLint `no-restricted-imports` rule prevents direct imports of the underlying protocol packages outside of this package. If you see an error like:

> Import from `@midnight-ntwrk/midnight-js-protocol/ledger` instead.

Replace the direct protocol import with the corresponding subpath from this package.

## Resources

- [Midnight Network](https://midnight.network)
- [Developer Hub](https://midnight.network/developer-hub)

## Terms & License

By using this package, you agree to [Midnight's Terms and Conditions](https://midnight.network/static/terms.pdf) and [Privacy Policy](https://midnight.network/static/privacy-policy.pdf).

Licensed under [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).
