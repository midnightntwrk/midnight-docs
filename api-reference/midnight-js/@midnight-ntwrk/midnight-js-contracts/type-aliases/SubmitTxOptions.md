[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / SubmitTxOptions

# Type Alias: SubmitTxOptions\<PCK\>

> **SubmitTxOptions**\<`PCK`\> = `object`

Configuration for [submitTx](../functions/submitTx.md).

## Type Parameters

### PCK

`PCK` *extends* `AnyProvableCircuitId`

## Properties

### circuitId?

> `readonly` `optional` **circuitId?**: `PCK` \| `PCK`[]

A circuit identifier to use to fetch the ZK artifacts needed to prove the
transaction. Only defined if a call transaction is being submitted.

#### Remarks

Where a transaction involves multiple circuits (e.g., when circuit calls are scoped to a transaction
context), this may be an array of circuit IDs.

***

### unprovenTx

> `readonly` **unprovenTx**: `UnprovenTransaction`

The transaction to prove, balance, and submit.
