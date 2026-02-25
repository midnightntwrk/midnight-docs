[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallOptionsWithArguments

# Type Alias: CallOptionsWithArguments\<C, ICK\>

> **CallOptionsWithArguments**\<`C`, `ICK`\> = `Contract.CircuitParameters`\<`C`, `ICK`\> *extends* \[\] ? [`CallOptionsBase`](CallOptionsBase.md)\<`C`, `ICK`\> : [`CallOptionsBase`](CallOptionsBase.md)\<`C`, `ICK`\> & `object`

Conditional type that optionally adds the inferred circuit argument types to
the options for a circuit call.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### ICK

`ICK` *extends* `Contract.ImpureCircuitId`\<`C`\>
