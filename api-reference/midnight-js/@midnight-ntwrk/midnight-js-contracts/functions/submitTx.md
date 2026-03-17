[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitTx

# Function: submitTx()

> **submitTx**\<`C`, `ICK`\>(`providers`, `options`): `Promise`\<`FinalizedTxData`\>

Proves, balances, and submits an unproven deployment or call transaction using
the given providers, according to the given options.

## Blocking Behavior

This method **waits indefinitely** for the transaction to appear on the blockchain via
`providers.publicDataProvider.watchForTxData(txId)`. It will not return until:
- The transaction is successfully included in the blockchain, OR
- An error occurs during proving, balancing, or submission

## Conditions When Transaction May Not Appear

A submitted transaction may fail to appear on-chain if:
- Transaction is invalid in ways not detected during local validation
- Network issues prevent propagation to validators
- Transaction is rejected by validator consensus
- Insufficient fees or resources
- Contract state has changed making the transaction invalid

## Implications of Aborting This Method

If the application terminates this method before it returns:
- Transaction may still be pending/processing on-chain
- **Private state updates are NOT stored** (even if transaction later succeeds on-chain)
- **Signing keys are NOT updated** (for deploy/replace authority transactions)
- Application state will be out of sync with blockchain state
- Manual recovery may be required to reconcile state

**Recommendation**: Use [submitTxAsync](submitTxAsync.md) for non-blocking submission with manual
finalization handling and timeout control.

## Type Parameters

### C

`C` *extends* `Any`

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

`Promise`\<`FinalizedTxData`\>

A promise that resolves with the finalized transaction data for the invocation,
         or rejects if an error occurs along the way.
