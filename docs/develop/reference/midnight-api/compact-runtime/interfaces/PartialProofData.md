[**@midnight-ntwrk/compact-runtime v0.11.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / PartialProofData

# Interface: PartialProofData

Encapsulates the data required to produce a zero-knowledge proof except the circuit output

## Extended by

- [`ProofData`](ProofData.md)

## Properties

### input

```ts
input: AlignedValue;
```

The inputs to a circuit

***

### privateTranscriptOutputs

```ts
privateTranscriptOutputs: AlignedValue[];
```

The transcript of the witness call outputs

***

### publicTranscript

```ts
publicTranscript: Op<AlignedValue>[];
```

The public transcript of operations
