[**@midnight-ntwrk/compact-runtime v0.11.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ProofData

# Interface: ProofData

Encapsulates the data required to produce a zero-knowledge proof

## Extends

- [`PartialProofData`](PartialProofData.md)

## Properties

### input

```ts
input: AlignedValue;
```

The inputs to a circuit

#### Inherited from

[`PartialProofData`](PartialProofData.md).[`input`](PartialProofData.md#input)

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

#### Inherited from

[`PartialProofData`](PartialProofData.md).[`privateTranscriptOutputs`](PartialProofData.md#privatetranscriptoutputs)

***

### publicTranscript

```ts
publicTranscript: Op<AlignedValue>[];
```

The public transcript of operations

#### Inherited from

[`PartialProofData`](PartialProofData.md).[`publicTranscript`](PartialProofData.md#publictranscript)
