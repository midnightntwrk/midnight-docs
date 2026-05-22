[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / withContractScopedTransaction

# Variable: withContractScopedTransaction

> `const` **withContractScopedTransaction**: \<`C`, `PCK`\>(`providers`, `fn`, `options?`) => `Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

Executes a function within the context of a contract-scoped transaction.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\> = `Contract.ProvableCircuitId`\<`C`\>

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, `PCK`\>

The contract providers to use within the transaction.

### fn

(`txCtx`) => `Promise`\<`void`\>

The function to execute within the transaction context.

### options?

[`ScopedTransactionOptions`](../type-aliases/ScopedTransactionOptions.md)

Optional transaction scope options.

## Returns

`Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

A `Promise` that resolves with the finalized transaction data of the single transaction
created for all circuit calls made within `fn`.

## Remarks

Where `fn` make circuit calls, these are batched together and submitted as a single transaction when
the function completes successfully. If `fn` throws an error, any unsubmitted circuit calls are discarded.
