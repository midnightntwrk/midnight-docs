[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitCallTx

# Function: submitCallTx()

Creates and submits a transaction for the invocation of a circuit on a given contract.

## Transaction Execution Phases

Midnight transactions execute in two phases:
1. **Guaranteed phase**: If failure occurs, the transaction is NOT included in the blockchain
2. **Fallible phase**: If failure occurs, the transaction IS recorded on-chain as a partial success

## Failure Behavior

**Guaranteed Phase Failure:**
- Transaction is rejected and not included in the blockchain
- `CallTxFailedError` is thrown with transaction data and circuit ID
- Private state updates are NOT stored (state remains unchanged)
- No on-chain record of the failed transaction

**Fallible Phase Failure:**
- Transaction is recorded on-chain with non-`SucceedEntirely` status
- `CallTxFailedError` is thrown with transaction data and circuit ID
- Private state updates are NOT stored (state remains unchanged)
- Transaction appears in blockchain history as partial success

## Param

The providers used to manage the invocation lifecycle.

## Param

Configuration.

## Param

Optional scoped transaction context to participate in an
       existing transaction scope.

## Throws

When transaction fails in either guaranteed or fallible phase.
        The error contains the finalized transaction data and circuit ID for debugging.

## Call Signature

> **submitCallTx**\<`C`, `PCK`\>(`providers`, `options`): `Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

#### PCK

`PCK` *extends* `string`

### Parameters

#### providers

[`SubmitTxProviders`](../type-aliases/SubmitTxProviders.md)\<`C`, `PCK`\>

#### options

[`CallTxOptionsBase`](../type-aliases/CallTxOptionsBase.md)\<`C`, `PCK`\>

### Returns

`Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

## Call Signature

> **submitCallTx**\<`C`, `PCK`\>(`providers`, `options`): `Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

#### PCK

`PCK` *extends* `string`

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`CallTxOptionsWithPrivateStateId`](../type-aliases/CallTxOptionsWithPrivateStateId.md)\<`C`, `PCK`\>

### Returns

`Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

## Call Signature

> **submitCallTx**\<`C`, `PCK`\>(`providers`, `options`, `transactionContext`): `Promise`\<[`CallResult`](../type-aliases/CallResult.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

#### PCK

`PCK` *extends* `string`

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`CallTxOptionsWithPrivateStateId`](../type-aliases/CallTxOptionsWithPrivateStateId.md)\<`C`, `PCK`\>

#### transactionContext

[`TransactionContext`](../interfaces/TransactionContext.md)\<`C`, `PCK`\>

### Returns

`Promise`\<[`CallResult`](../type-aliases/CallResult.md)\<`C`, `PCK`\>\>

## Call Signature

> **submitCallTx**\<`C`, `PCK`\>(`providers`, `options`, `transactionContext`): `Promise`\<[`CallResult`](../type-aliases/CallResult.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

#### PCK

`PCK` *extends* `string`

### Parameters

#### providers

[`SubmitTxProviders`](../type-aliases/SubmitTxProviders.md)\<`C`, `PCK`\>

#### options

[`CallTxOptionsBase`](../type-aliases/CallTxOptionsBase.md)\<`C`, `PCK`\>

#### transactionContext

[`TransactionContext`](../interfaces/TransactionContext.md)\<`C`, `PCK`\>

### Returns

`Promise`\<[`CallResult`](../type-aliases/CallResult.md)\<`C`, `PCK`\>\>
