[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallResultPrivate

# Type Alias: CallResultPrivate\<C, PCK\>

> **CallResultPrivate**\<`C`, `PCK`\> = `object`

The private (sensitive) portions of the call result.

## Remarks

**Privacy-sensitive type.** Every field on this type carries data the
zero-knowledge proofs were designed to keep confidential: the ZK-aligned
circuit input/output, the private transcript outputs from witness calls,
the JS-typed circuit result, the next private state, and the next Zswap
local state.

Application code must not log, serialize, or transmit instances of this
type. If a non-sensitive subset of the call result is needed (for example,
the JS `result` value alone), extract that field explicitly rather than
passing the whole object across a trust boundary.

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

The JS representation of the value returned by the circuit.
