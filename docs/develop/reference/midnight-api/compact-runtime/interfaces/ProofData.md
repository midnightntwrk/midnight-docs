[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ProofData

# Interface: ProofData

Encapsulates the data required to produce a zero-knowledge proof

## Properties

### input

```ts
input: AlignedValue;
```

The inputs to a circuit

***

### output

```ts
output: AlignedValue;
```

The outputs from a circuit

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
