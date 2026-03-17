[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CircuitCallTxInterface

# Type Alias: CircuitCallTxInterface\<C\>

> **CircuitCallTxInterface**\<`C`\> = `{ [ICK in Contract.ImpureCircuitId<C>]: { (args: CircuitParameters<C, ICK>): Promise<FinalizedCallTxData<C, ICK>>; (txCtx: TransactionContext<C, ICK>, args: CircuitParameters<C, ICK>): Promise<CallResult<C, ICK>> } }`

A type that lifts each circuit defined in a contract to a function that builds
and submits a call transaction.

## Type Parameters

### C

`C` *extends* `Contract.Any`
