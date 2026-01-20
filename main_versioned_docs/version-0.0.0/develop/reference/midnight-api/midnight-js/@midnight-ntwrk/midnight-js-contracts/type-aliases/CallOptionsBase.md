[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallOptionsBase

# Type Alias: CallOptionsBase\<C, ICK\>

> **CallOptionsBase**\<`C`, `ICK`\> = `object`

Describes the target of a circuit invocation.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)

### ICK

`ICK` *extends* [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>

## Properties

### circuitId

> `readonly` **circuitId**: `ICK`

The identifier of the circuit to call.

***

### contract

> `readonly` **contract**: `C`

The contract defining the circuit to call.

***

### contractAddress

> `readonly` **contractAddress**: `ContractAddress`

The address of the contract being executed.
