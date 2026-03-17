[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnsubmittedDeployTxPrivateData

# Type Alias: UnsubmittedDeployTxPrivateData\<C\>

> **UnsubmittedDeployTxPrivateData**\<`C`\> = `object`

Base type for private data relevant to an unsubmitted deployment transaction.

## Type Parameters

### C

`C` *extends* `Contract.Any`

## Properties

### initialPrivateState

> `readonly` **initialPrivateState**: `Contract.PrivateState`\<`C`\>

The initial private state of the contract deployed to the blockchain. This
value is persisted if the transaction succeeds.

***

### signingKey

> `readonly` **signingKey**: `SigningKey`

The signing key that was added as the deployed contract's maintenance authority.
