[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / SubmitTxOptions

# Type Alias: SubmitTxOptions\<ICK\>

> **SubmitTxOptions**\<`ICK`\> = `object`

Configuration for [submitTx](../functions/submitTx.md).

## Type Parameters

### ICK

`ICK` *extends* `Contract.ImpureCircuitId`\<`Contract.Any`\>

## Properties

### circuitId?

> `readonly` `optional` **circuitId**: `ICK` \| `ICK`[]

A circuit identifier to use to fetch the ZK artifacts needed to prove the
transaction. Only defined if a call transaction is being submitted.

#### Remarks

Where a transaction involves multiple circuits (e.g., when circuit calls are scoped to a transaction
context), this may be an array of circuit IDs.

***

### unprovenTx

> `readonly` **unprovenTx**: `UnprovenTransaction`

The transaction to prove, balance, and submit.
