[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitCallTxAsync

# Function: submitCallTxAsync()

> **submitCallTxAsync**\<`C`, `ICK`\>(`providers`, `options`): `Promise`\<[`SubmittedCallTx`](../type-aliases/SubmittedCallTx.md)\<`C`, `ICK`\>\>

Creates and submits a transaction for the invocation of a circuit on a given contract,
returning immediately after submission without waiting for finalization.

Unlike [submitCallTx](submitCallTx.md), this function does not wait for transaction finalization,
check transaction status, or update private state. The caller must handle these steps manually.

## Transaction Execution Phases

Midnight transactions execute in two phases:
1. **Guaranteed phase**: If failure occurs, the transaction is NOT included in the blockchain
2. **Fallible phase**: If failure occurs, the transaction IS recorded on-chain as a partial success

## Manual Post-Submission Steps

After calling this function, you must manually:
1. Watch for transaction finalization using `providers.publicDataProvider.watchForTxData(txId)`
2. Check transaction status (compare against `SucceedEntirely`)
3. Handle failures appropriately (throw errors, log, etc.)
4. Update private state if transaction succeeded and `privateStateId` was provided

## Failure Behavior (Manual Handling Required)

**Guaranteed Phase Failure:**
- Transaction is rejected and not included in the blockchain
- `watchForTxData` may reject or return error status
- You must NOT store private state updates

**Fallible Phase Failure:**
- Transaction is recorded on-chain with non-`SucceedEntirely` status
- `watchForTxData` returns transaction data with failed status
- You must NOT store private state updates
- Transaction appears in blockchain history as partial success

## Type Parameters

### C

`C` *extends* `Any`

### ICK

`ICK` *extends* `string`

## Parameters

### providers

`SubmitCallTxProviders`\<`C`, `ICK`\>

The providers used to manage the invocation lifecycle.

### options

[`CallTxOptions`](../type-aliases/CallTxOptions.md)\<`C`, `ICK`\>

Configuration.

## Returns

`Promise`\<[`SubmittedCallTx`](../type-aliases/SubmittedCallTx.md)\<`C`, `ICK`\>\>

A `Promise` that resolves with the transaction ID and call transaction data immediately after submission;
        or rejects with an error if the submission fails.

## Example

```typescript
// 1. Submit
const { txId, callTxData } = await submitCallTxAsync(providers, options);

// 2. Watch (when ready)
const finalizedData = await providers.publicDataProvider.watchForTxData(txId);

// 3. Check status
if (finalizedData.status !== SucceedEntirely) {
  throw new CallTxFailedError(finalizedData, options.circuitId);
}

// 4. Update private state manually if needed
if (options.privateStateId) {
  await providers.privateStateProvider.set(
    privateStateId,
    callTxData.private.nextPrivateState
  );
}
```
