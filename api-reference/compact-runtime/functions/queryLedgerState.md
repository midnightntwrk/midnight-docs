[**@midnight-ntwrk/compact-runtime v0.14.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / queryLedgerState

# Function: queryLedgerState()

```ts
function queryLedgerState(
   circuitContext, 
   partialProofData, 
   program): 
  | AlignedValue
  | GatherResult[];
```

Runs a program (query) against the current ledger state in the given circuit context. Records the transcript in the
given partial proof data.

## Parameters

### circuitContext

[`CircuitContext`](../interfaces/CircuitContext.md)

The context for the currently executing circuit.

### partialProofData

[`PartialProofData`](../interfaces/PartialProofData.md)

The partial proof data to insert the query results into.

### program

[`Op`](../type-aliases/Op.md)\<`null`\>[]

The query to run.

## Returns

  \| [`AlignedValue`](../type-aliases/AlignedValue.md)
  \| [`GatherResult`](../type-aliases/GatherResult.md)[]
