**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / partitionTranscripts

# Function: partitionTranscripts()

```ts
partitionTranscripts(calls, params): [Transcript<AlignedValue> | undefined, Transcript<AlignedValue> | undefined][]
```

Finalizes a set of programs against their initial contexts,
resulting in guaranteed and fallible [Transcript](../type-aliases/Transcript.md)s, optimally
allocated, and heuristically covered for gas fees.

## Parameters

• **calls**: [`PreTranscript`](../classes/PreTranscript.md)[]

• **params**: [`LedgerParameters`](../classes/LedgerParameters.md)

## Returns

[[`Transcript`](../type-aliases/Transcript.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\> \| `undefined`, [`Transcript`](../type-aliases/Transcript.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\> \| `undefined`][]
