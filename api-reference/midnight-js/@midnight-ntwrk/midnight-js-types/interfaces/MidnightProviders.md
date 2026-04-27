[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / MidnightProviders

# Interface: MidnightProviders\<PCK, PSI, PS\>

Set of providers needed for transaction construction and submission.

## Type Parameters

### PCK

`PCK` *extends* [`AnyProvableCircuitId`](../type-aliases/AnyProvableCircuitId.md) = [`AnyProvableCircuitId`](../type-aliases/AnyProvableCircuitId.md)

A union of string literal types representing the callable circuits.

### PSI

`PSI` *extends* [`PrivateStateId`](../type-aliases/PrivateStateId.md) = [`PrivateStateId`](../type-aliases/PrivateStateId.md)

Parameter indicating the private state ID, sometimes a union of string literals.

### PS

`PS` = `any`

Parameter indicating the private state type stored, sometimes a union of private state types.

## Properties

### loggerProvider?

> `readonly` `optional` **loggerProvider?**: [`LoggerProvider`](LoggerProvider.md)

An optional logger that provides utilities for logging at given levels.

***

### midnightProvider

> `readonly` **midnightProvider**: [`MidnightProvider`](MidnightProvider.md)

Submits proven, balanced transactions to the network.

***

### privateStateProvider

> `readonly` **privateStateProvider**: [`PrivateStateProvider`](PrivateStateProvider.md)\<`PSI`, `PS`\>

Manages the private state of a contract.

***

### proofProvider

> `readonly` **proofProvider**: [`ProofProvider`](ProofProvider.md)

Creates proven, unbalanced transactions.

***

### publicDataProvider

> `readonly` **publicDataProvider**: [`PublicDataProvider`](PublicDataProvider.md)

Retrieves public data from the blockchain.

***

### walletProvider

> `readonly` **walletProvider**: [`WalletProvider`](WalletProvider.md)

Creates proven, balanced transactions.

***

### zkConfigProvider

> `readonly` **zkConfigProvider**: [`ZKConfigProvider`](../classes/ZKConfigProvider.md)\<`PCK`\>

Retrieves the ZK artifacts of a contract needed to create proofs.
