[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / partitionTranscripts

# Function: partitionTranscripts()

```ts
function partitionTranscripts(calls, params): PartitionedTranscript[];
```

Finalizes a set of programs against their initial contexts,
resulting in guaranteed and fallible [Transcript](../type-aliases/Transcript.md)s, optimally
allocated, and heuristically covered for gas fees.

## Parameters

### calls

[`PreTranscript`](../classes/PreTranscript.md)[]

### params

[`LedgerParameters`](../classes/LedgerParameters.md)

## Returns

[`PartitionedTranscript`](../type-aliases/PartitionedTranscript.md)[]
