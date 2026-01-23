[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallResultPublic

# Type Alias: CallResultPublic

> **CallResultPublic** = `object`

The public portions of the call result.

## Properties

### nextContractState

> `readonly` **nextContractState**: `StateValue`

The public state resulting from executing the circuit.

***

### partitionedTranscript

> `readonly` **partitionedTranscript**: [`PartitionedTranscript`](PartitionedTranscript.md)

A [publicTranscript](#publictranscript) partitioned into guaranteed and fallible sections.
The guaranteed section of a public transcript must succeed for the corresponding
transaction to be considered valid. The fallible section of a public transcript
can fail without invalidating the transaction, as long as the guaranteed section succeeds.

***

### publicTranscript

> `readonly` **publicTranscript**: `Op`\<`AlignedValue`\>[]

The public transcript resulting from executing the circuit.
