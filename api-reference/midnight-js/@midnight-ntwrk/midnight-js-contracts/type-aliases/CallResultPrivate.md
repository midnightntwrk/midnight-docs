[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallResultPrivate

# Type Alias: CallResultPrivate\<C, PCK\>

> **CallResultPrivate**\<`C`, `PCK`\> = `object`

The private (sensitive) portions of the call result.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>

## Properties

### input

> `readonly` **input**: `AlignedValue`

ZK representation of the circuit arguments.

***

### nextPrivateState

> `readonly` **nextPrivateState**: `Contract.PrivateState`\<`C`\>

The private state resulting from executing the circuit.

***

### nextZswapLocalState

> `readonly` **nextZswapLocalState**: `ZswapLocalState`

The Zswap local state resulting from executing the circuit.

***

### output

> `readonly` **output**: `AlignedValue`

ZK representation of the circuit result.

***

### privateTranscriptOutputs

> `readonly` **privateTranscriptOutputs**: `AlignedValue`[]

ZK representation of the circuit witness call results.

***

### result

> `readonly` **result**: `Contract.CircuitReturnType`\<`C`, `PCK`\>

The JS representation of the input to the circuit.
