[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / SubmitTxOptions

# Type Alias: SubmitTxOptions\<ICK\>

> **SubmitTxOptions**\<`ICK`\> = `object`

Configuration for [submitTx](../functions/submitTx.md).

## Type Parameters

### ICK

`ICK` *extends* [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)

## Properties

### circuitId?

> `readonly` `optional` **circuitId**: `ICK`

A circuit identifier to use to fetch the ZK artifacts needed to prove the
transaction. Only defined if a call transaction is being submitted.

***

### newCoins?

> `readonly` `optional` **newCoins**: `CoinInfo`[]

Any new coins created during the construction of the transaction. Only defined
if the transaction being submitted is a call or deploy transaction.

***

### unprovenTx

> `readonly` **unprovenTx**: `UnprovenTransaction`

The transaction to prove, balance, and submit.
