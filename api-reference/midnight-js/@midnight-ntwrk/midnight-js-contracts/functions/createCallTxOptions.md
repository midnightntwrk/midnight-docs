[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCallTxOptions

# Function: createCallTxOptions()

> **createCallTxOptions**\<`C`, `ICK`\>(`compiledContract`, `circuitId`, `contractAddress`, `privateStateId`, `args`): [`CallTxOptions`](../type-aliases/CallTxOptions.md)\<`C`, `ICK`\>

Creates a [CallTxOptions](../type-aliases/CallTxOptions.md) object from various data.

## Type Parameters

### C

`C` *extends* `Any`

### ICK

`ICK` *extends* `string`

## Parameters

### compiledContract

`CompiledContract`\<`C`, `any`\>

### circuitId

`ICK`

### contractAddress

`string`

### privateStateId

`string` | `undefined`

### args

`CircuitParameters`\<`C`, `ICK`\>

## Returns

[`CallTxOptions`](../type-aliases/CallTxOptions.md)\<`C`, `ICK`\>
