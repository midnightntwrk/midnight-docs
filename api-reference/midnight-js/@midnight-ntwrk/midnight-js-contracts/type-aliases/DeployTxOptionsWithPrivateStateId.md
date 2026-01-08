[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / DeployTxOptionsWithPrivateStateId

# Type Alias: DeployTxOptionsWithPrivateStateId\<C\>

> **DeployTxOptionsWithPrivateStateId**\<`C`\> = [`DeployTxOptionsWithPrivateState`](DeployTxOptionsWithPrivateState.md)\<`C`\> & `object`

Configuration for creating deploy transactions for contracts with private state. This
configuration is used when a deployment transaction is created and an initial private
state needs to be stored, as is the case in [submitDeployTx](../functions/submitDeployTx.md).

## Type declaration

### privateStateId

> `readonly` **privateStateId**: [`PrivateStateId`](../../midnight-js-types/type-aliases/PrivateStateId.md)

The identifier for the private state of the contract.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
