[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitCallTx

# Function: submitCallTx()

Creates and submits a transaction for the invocation of a circuit on a given contract.

## Param

The providers used to manage the invocation lifecycle.

## Param

Configuration.

## Call Signature

> **submitCallTx**\<`C`, `ICK`\>(`providers`, `options`): `Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `ICK`\>\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`undefined`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`undefined`\>\>

#### ICK

`ICK` *extends* `string`

### Parameters

#### providers

[`SubmitTxProviders`](../type-aliases/SubmitTxProviders.md)\<`C`, `ICK`\>

#### options

[`CallTxOptionsBase`](../type-aliases/CallTxOptionsBase.md)\<`C`, `ICK`\>

### Returns

`Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `ICK`\>\>

## Call Signature

> **submitCallTx**\<`C`, `ICK`\>(`providers`, `options`): `Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `ICK`\>\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

#### ICK

`ICK` *extends* `string`

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`CallTxOptionsWithPrivateStateId`](../type-aliases/CallTxOptionsWithPrivateStateId.md)\<`C`, `ICK`\>

### Returns

`Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `ICK`\>\>
