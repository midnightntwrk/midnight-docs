[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / DeployContractOptionsWithPrivateState

# Type Alias: DeployContractOptionsWithPrivateState\<C\>

> **DeployContractOptionsWithPrivateState**\<`C`\> = [`DeployContractOptionsBase`](DeployContractOptionsBase.md)\<`C`\> & `object`

[deployContract](../functions/deployContract.md) base options with information needed to store private states;
only used if the contract being deployed has a private state.

## Type declaration

### initialPrivateState

> `readonly` **initialPrivateState**: [`PrivateState`](../../midnight-js-types/type-aliases/PrivateState.md)\<`C`\>

The private state to run the circuit against.

### privateStateId

> `readonly` **privateStateId**: [`PrivateStateId`](../../midnight-js-types/type-aliases/PrivateStateId.md)

An identifier for the private state of the contract being found.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
