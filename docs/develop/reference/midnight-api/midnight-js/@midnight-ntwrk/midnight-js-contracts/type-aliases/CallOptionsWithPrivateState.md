[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallOptionsWithPrivateState

# Type Alias: CallOptionsWithPrivateState\<C, ICK\>

> **CallOptionsWithPrivateState**\<`C`, `ICK`\> = [`CallOptionsWithProviderDataDependencies`](CallOptionsWithProviderDataDependencies.md)\<`C`, `ICK`\> & `object`

Call options for contracts with private state.

## Type declaration

### initialPrivateState

> `readonly` **initialPrivateState**: [`PrivateState`](../../midnight-js-types/type-aliases/PrivateState.md)\<`C`\>

The private state to run the circuit against.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)

### ICK

`ICK` *extends* [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>
