[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallOptionsBase

# Type Alias: CallOptionsBase\<C, PCK\>

> **CallOptionsBase**\<`C`, `PCK`\> = `object`

Describes the target of a circuit invocation.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>

## Properties

### circuitId

> `readonly` **circuitId**: `PCK`

The identifier of the circuit to call.

***

### compiledContract

> `readonly` **compiledContract**: `CompiledContract.CompiledContract`\<`C`, `any`\>

The contract defining the circuit to call.

***

### contractAddress

> `readonly` **contractAddress**: [`ContractAddress`](#)

The address of the contract being executed.
