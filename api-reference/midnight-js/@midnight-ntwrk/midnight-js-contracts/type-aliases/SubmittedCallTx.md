[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / SubmittedCallTx

# Type Alias: SubmittedCallTx\<C, PCK\>

> **SubmittedCallTx**\<`C`, `PCK`\> = `object`

Data returned from an asynchronous call transaction submission.
Contains the transaction ID and call transaction data without waiting for finalization.

## Remarks

**Privacy-sensitive type.** The `callTxData` field carries
[UnsubmittedCallTxData](UnsubmittedCallTxData.md) and transitively the `UnprovenTransaction`
and the call's private state. Treat as confidential when logging,
serializing, or transmitting: read only `txId` or destructure specific
non-sensitive fields rather than spreading or stringifying the whole
object.

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
