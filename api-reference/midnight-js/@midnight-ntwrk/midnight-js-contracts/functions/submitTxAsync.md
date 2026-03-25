[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitTxAsync

# Function: submitTxAsync()

> **submitTxAsync**\<`C`, `PCK`\>(`providers`, `options`): `Promise`\<`string`\>

Proves, balances, and submits an unproven deployment or call transaction using
the given providers, according to the given options. Unlike [submitTx](submitTx.md),
this function returns immediately after submission without waiting for finalization.

## Type Parameters

### C

`C` *extends* `Any`

### PCK

`PCK` *extends* `string`

## Parameters

### providers

[`SubmitTxProviders`](../type-aliases/SubmitTxProviders.md)\<`C`, `PCK`\>

The providers used to manage the transaction lifecycle.

### options

[`SubmitTxOptions`](../type-aliases/SubmitTxOptions.md)\<`PCK`\>

Configuration.

## Returns

`Promise`\<`string`\>

A promise that resolves with the transaction ID immediately after submission,
         or rejects if an error occurs during preparation or submission.
         To watch for finalization, use providers.publicDataProvider.watchForTxData(txId).
