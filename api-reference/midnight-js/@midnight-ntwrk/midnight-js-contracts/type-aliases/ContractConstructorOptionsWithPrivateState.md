[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ContractConstructorOptionsWithPrivateState

# Type Alias: ContractConstructorOptionsWithPrivateState\<C\>

> **ContractConstructorOptionsWithPrivateState**\<`C`\> = [`ContractConstructorOptionsWithProviderDataDependencies`](ContractConstructorOptionsWithProviderDataDependencies.md)\<`C`\> & `object`

Conditional type that optionally adds the inferred circuit argument types to
the target of a circuit invocation.

## Type declaration

### initialPrivateState

> `readonly` **initialPrivateState**: [`PrivateState`](../../midnight-js-types/type-aliases/PrivateState.md)\<`C`\>

The private state to run the circuit against.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
