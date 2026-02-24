[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / CircuitParameters

# Type Alias: CircuitParameters\<C, K\>

> **CircuitParameters**\<`C`, `K`\> = `Parameters`\<`C`\[`"impureCircuits"`\]\[`K`\]\> *extends* \[`CircuitContext`\<`any`\>, `...(infer A)`\] ? `A` : `never`

The parameter types of the circuits in a contract.

## Type Parameters

### C

`C` *extends* [`Contract`](../interfaces/Contract.md)

### K

`K` *extends* [`ImpureCircuitId`](ImpureCircuitId.md)\<`C`\>
