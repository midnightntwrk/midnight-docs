[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCallTxOptions

# Function: createCallTxOptions()

> **createCallTxOptions**\<`C`, `ICK`\>(`contract`, `circuitId`, `contractAddress`, `privateStateId`, `args`): [`CallTxOptions`](../type-aliases/CallTxOptions.md)\<`C`, `ICK`\>

Creates a [CallTxOptions](../type-aliases/CallTxOptions.md) object from various data.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

### ICK

`ICK` *extends* `string`

## Parameters

### contract

`C`

### circuitId

`ICK`

### contractAddress

`string`

### privateStateId

`undefined` | `string`

### args

[`CircuitParameters`](../../midnight-js-types/type-aliases/CircuitParameters.md)\<`C`, `ICK`\>

## Returns

[`CallTxOptions`](../type-aliases/CallTxOptions.md)\<`C`, `ICK`\>
