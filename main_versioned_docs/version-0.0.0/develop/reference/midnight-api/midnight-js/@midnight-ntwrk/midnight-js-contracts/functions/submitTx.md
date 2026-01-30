[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitTx

# Function: submitTx()

> **submitTx**\<`C`, `ICK`\>(`providers`, `options`): `Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

Proves, balances, and submits an unproven deployment or call transaction using
the given providers, according to the given options.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

### ICK

`ICK` *extends* `string`

## Parameters

### providers

[`SubmitTxProviders`](../type-aliases/SubmitTxProviders.md)\<`C`, `ICK`\>

The providers used to manage the transaction lifecycle.

### options

[`SubmitTxOptions`](../type-aliases/SubmitTxOptions.md)\<`ICK`\>

Configuration.

## Returns

`Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

A promise that resolves with the finalized transaction data for the invocation,
         or rejects if an error occurs along the way.
