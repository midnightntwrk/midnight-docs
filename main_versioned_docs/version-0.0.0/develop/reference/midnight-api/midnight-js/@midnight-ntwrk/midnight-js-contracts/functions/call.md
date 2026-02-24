[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / call

# Function: call()

> **call**\<`C`, `ICK`\>(`options`): [`CallResult`](../type-aliases/CallResult.md)\<`C`, `ICK`\>

Calls a circuit in the given contract according to the given configuration.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

### ICK

`ICK` *extends* `string`

## Parameters

### options

[`CallOptions`](../type-aliases/CallOptions.md)\<`C`, `ICK`\>

Configuration.

## Returns

[`CallResult`](../type-aliases/CallResult.md)\<`C`, `ICK`\>
