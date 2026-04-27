[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / SubmittedCallTx

# Type Alias: SubmittedCallTx\<C, PCK\>

> **SubmittedCallTx**\<`C`, `PCK`\> = `object`

Data returned from an asynchronous call transaction submission.
Contains the transaction ID and call transaction data without waiting for finalization.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>

## Properties

### callTxData

> `readonly` **callTxData**: [`UnsubmittedCallTxData`](UnsubmittedCallTxData.md)\<`C`, `PCK`\>

The unproven call transaction data including private state.

***

### txId

> `readonly` **txId**: `string`

The transaction ID returned from submission.
