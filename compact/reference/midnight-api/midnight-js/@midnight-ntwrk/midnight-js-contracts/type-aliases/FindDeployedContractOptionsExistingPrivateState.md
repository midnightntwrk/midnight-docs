[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FindDeployedContractOptionsExistingPrivateState

# Type Alias: FindDeployedContractOptionsExistingPrivateState\<C\>

> **FindDeployedContractOptionsExistingPrivateState**\<`C`\> = [`FindDeployedContractOptionsBase`](FindDeployedContractOptionsBase.md)\<`C`\> & `object`

[findDeployedContract](../functions/findDeployedContract.md) base configuration that includes an initial private
state to store and the private state ID at which to store it. Only used if
the intention is to overwrite the private state currently stored at the given
private state ID.

## Type declaration

### privateStateId

> `readonly` **privateStateId**: [`PrivateStateId`](../../midnight-js-types/type-aliases/PrivateStateId.md)

An identifier for the private state of the contract being found.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
