[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCallTxOptions

# Function: createCallTxOptions()

> **createCallTxOptions**\<`C`, `PCK`\>(`compiledContract`, `circuitId`, `contractAddress`, `privateStateId`, `additionalCoinEncPublicKeyMappings`, `args`): [`CallTxOptions`](../type-aliases/CallTxOptions.md)\<`C`, `PCK`\>

Creates a [CallTxOptions](../type-aliases/CallTxOptions.md) object from various data.

## Type Parameters

### C

`C` *extends* `Any`

### PCK

`PCK` *extends* `string`

## Parameters

### compiledContract

`CompiledContract`\<`C`, `any`\>

### circuitId

`PCK`

### contractAddress

`string`

### privateStateId

`string` \| `undefined`

### additionalCoinEncPublicKeyMappings

`ReadonlyMap`\<`string`, `string`\> \| `undefined`

### args

`CircuitParameters`\<`C`, `PCK`\>

## Returns

[`CallTxOptions`](../type-aliases/CallTxOptions.md)\<`C`, `PCK`\>
