[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnsubmittedDeployTxPrivateData

# Type Alias: UnsubmittedDeployTxPrivateData\<C\>

> **UnsubmittedDeployTxPrivateData**\<`C`\> = `object`

Base type for private data relevant to an unsubmitted deployment transaction.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)

## Properties

### initialPrivateState

> `readonly` **initialPrivateState**: [`PrivateState`](../../midnight-js-types/type-aliases/PrivateState.md)\<`C`\>

The initial private state of the contract deployed to the blockchain. This
value is persisted if the transaction succeeds.

***

### signingKey

> `readonly` **signingKey**: `SigningKey`

The signing key that was added as the deployed contract's maintenance authority.
