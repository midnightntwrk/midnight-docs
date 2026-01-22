[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / getImpureCircuitIds

# Function: getImpureCircuitIds()

> **getImpureCircuitIds**\<`C`\>(`contract`): [`ImpureCircuitId`](../type-aliases/ImpureCircuitId.md)\<`C`\>[]

Typesafe version of `Object.keys(contract.impureCircuits)`.

## Type Parameters

### C

`C` *extends* [`Contract`](../interfaces/Contract.md)\<`any`, [`Witnesses`](../type-aliases/Witnesses.md)\<`any`\>\>

The contract type for which we would like impure circuit IDs.

## Parameters

### contract

`C`

The contract having impure circuits for which we want ids.

## Returns

[`ImpureCircuitId`](../type-aliases/ImpureCircuitId.md)\<`C`\>[]
