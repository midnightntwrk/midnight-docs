[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnsubmittedDeployTxPrivateData

# Type Alias: UnsubmittedDeployTxPrivateData\<C\>

> **UnsubmittedDeployTxPrivateData**\<`C`\> = `object`

Base type for private data relevant to an unsubmitted deployment transaction.

## Remarks

**Privacy-sensitive type.** The `signingKey` field carries the contract's
maintenance authority, and `initialPrivateState` carries application-defined
private state that the zero-knowledge proofs were designed to keep
confidential. Every field on this type is private.

Application code must not log, serialize, or transmit instances of this
type. If a non-sensitive identifier derived from the deployment is needed,
compute it explicitly outside this type rather than passing the whole
object across a trust boundary.

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
