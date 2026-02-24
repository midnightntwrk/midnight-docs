[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallResultPrivate

# Type Alias: CallResultPrivate\<C, ICK\>

> **CallResultPrivate**\<`C`, `ICK`\> = `object`

The private (sensitive) portions of the call result.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)

### ICK

`ICK` *extends* [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>

## Properties

### input

> `readonly` **input**: `AlignedValue`

ZK representation of the circuit arguments.

***

### nextPrivateState

> `readonly` **nextPrivateState**: [`PrivateState`](../../midnight-js-types/type-aliases/PrivateState.md)\<`C`\>

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

> `readonly` **result**: [`CircuitReturnType`](../../midnight-js-types/type-aliases/CircuitReturnType.md)\<`C`, `ICK`\>

The JS representation of the input to the circuit.
