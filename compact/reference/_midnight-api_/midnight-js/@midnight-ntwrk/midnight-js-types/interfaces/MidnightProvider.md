[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / MidnightProvider

# Interface: MidnightProvider

Interface for Midnight transaction submission logic. It could be implemented, e.g., by a wallet,
a third-party service, or a node itself.

## Methods

### submitTx()

> **submitTx**(`tx`): `Promise`\<`string`\>

Submit a transaction to the network to be consensed upon.

#### Parameters

##### tx

[`BalancedTransaction`](../type-aliases/BalancedTransaction.md)

A balanced and proven transaction.

#### Returns

`Promise`\<`string`\>

The transaction identifier of the submitted transaction.
