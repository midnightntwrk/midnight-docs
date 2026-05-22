[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallOptionsWithPrivateState

# Type Alias: CallOptionsWithPrivateState\<C, PCK\>

> **CallOptionsWithPrivateState**\<`C`, `PCK`\> = [`CallOptionsWithProviderDataDependencies`](CallOptionsWithProviderDataDependencies.md)\<`C`, `PCK`\> & `object`

Call options for contracts with private state.

## Type Declaration

### initialPrivateState

> `readonly` **initialPrivateState**: `Contract.PrivateState`\<`C`\>

The private state to run the circuit against.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>
