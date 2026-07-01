[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CallProofData

# Interface: CallProofData

Encapsulates the data required to produce a zero-knowledge proof

## Extends

- [`ProofData`](ProofData.md)

## Properties

### circuitId

```ts
circuitId: string;
```

The ID of the circuit that was called.

***

### commCommData?

```ts
optional commCommData: CommunicationCommitmentData;
```

Data included by the parent call only if this was a sub-call

***

### contractAddress

```ts
contractAddress: string;
```

The address of the contract defining the circuit for which this proof data is pertinent.

***

### finalQueryContext

```ts
finalQueryContext: QueryContext;
```

The ledger state of the contract when the circuit finished.

***

### initialQueryContext

```ts
initialQueryContext: QueryContext;
```

The ledger state of the contract before the circuit was called.

***

### input

```ts
input: AlignedValue;
```

The inputs to a circuit

#### Inherited from

[`ProofData`](ProofData.md).[`input`](ProofData.md#input)

***

### output

```ts
output: AlignedValue;
```

The outputs from a circuit

#### Inherited from

[`ProofData`](ProofData.md).[`output`](ProofData.md#output)

***

### privateTranscriptOutputs

```ts
privateTranscriptOutputs: AlignedValue[];
```

The transcript of the witness call outputs

#### Inherited from

[`ProofData`](ProofData.md).[`privateTranscriptOutputs`](ProofData.md#privatetranscriptoutputs)

***

### publicTranscript

```ts
publicTranscript: Op<AlignedValue>[];
```

The public transcript of operations

#### Inherited from

[`ProofData`](ProofData.md).[`publicTranscript`](ProofData.md#publictranscript)
