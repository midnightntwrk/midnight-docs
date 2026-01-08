[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CircuitCallTxInterface

# Type Alias: CircuitCallTxInterface\<C\>

> **CircuitCallTxInterface**\<`C`\> = `{ [ICK in ImpureCircuitId<C>]: (args: CircuitParameters<C, ICK>) => Promise<FinalizedCallTxData<C, ICK>> }`

A type that lifts each circuit defined in a contract to a function that builds
and submits a call transaction.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
