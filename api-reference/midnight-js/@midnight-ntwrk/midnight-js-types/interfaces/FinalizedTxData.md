[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / FinalizedTxData

# Interface: FinalizedTxData

Data for any finalized transaction.

## Properties

### blockHash

> `readonly` **blockHash**: `string`

The block hash of the block in which the transaction was included.

***

### blockHeight

> `readonly` **blockHeight**: `number`

The block height of the block in which the transaction was included.

***

### status

> `readonly` **status**: [`TxStatus`](../type-aliases/TxStatus.md)

The status of a submitted transaction.

***

### tx

> `readonly` **tx**: `Transaction`

The transaction that was finalized.

***

### txHash

> `readonly` **txHash**: `string`

The transaction hash of the transaction in which the original transaction was included.

***

### txId

> `readonly` **txId**: `string`

The transaction ID of the submitted transaction.
