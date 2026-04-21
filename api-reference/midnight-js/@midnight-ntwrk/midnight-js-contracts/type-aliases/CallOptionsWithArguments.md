[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallOptionsWithArguments

# Type Alias: CallOptionsWithArguments\<C, PCK\>

> **CallOptionsWithArguments**\<`C`, `PCK`\> = `Contract.CircuitParameters`\<`C`, `PCK`\> *extends* \[\] ? [`CallOptionsBase`](CallOptionsBase.md)\<`C`, `PCK`\> : [`CallOptionsBase`](CallOptionsBase.md)\<`C`, `PCK`\> & `object`

Conditional type that optionally adds the inferred circuit argument types to
the options for a circuit call.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>
