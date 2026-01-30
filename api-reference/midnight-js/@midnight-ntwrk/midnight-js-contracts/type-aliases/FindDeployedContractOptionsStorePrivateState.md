[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FindDeployedContractOptionsStorePrivateState

# Type Alias: FindDeployedContractOptionsStorePrivateState\<C\>

> **FindDeployedContractOptionsStorePrivateState**\<`C`\> = [`FindDeployedContractOptionsExistingPrivateState`](FindDeployedContractOptionsExistingPrivateState.md)\<`C`\> & `object`

[findDeployedContract](../functions/findDeployedContract.md) configuration that includes an initial private
state to store and the private state ID at which to store it. Only used if
the intention is to overwrite the private state currently stored at the given
private state ID.

## Type declaration

### initialPrivateState

> `readonly` **initialPrivateState**: [`PrivateState`](../../midnight-js-types/type-aliases/PrivateState.md)\<`C`\>

For types of contract that make no use of private state and or witnesses that operate upon it, this
property may be `undefined`. Otherwise, the value provided via this property should be same initial
state that was used when calling [deployContract](../functions/deployContract.md).

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
