[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / FinalizedTxData

# Interface: FinalizedTxData

Data for any finalized transaction.

## Properties

### blockAuthor

> `readonly` **blockAuthor**: `string` \| `null`

The author of the block in which the transaction was included.

***

### blockHash

> `readonly` **blockHash**: `string`

The block hash of the block in which the transaction was included.

***

### blockHeight

> `readonly` **blockHeight**: `number`

The block height of the block in which the transaction was included.

***

### blockTimestamp

> `readonly` **blockTimestamp**: `number`

The timestamp of the block in which the transaction was included.

***

### fees

> `readonly` **fees**: [`Fees`](../type-aliases/Fees.md)

The fees associated with the transaction, including both paid and estimated fees.

***

### identifiers

> `readonly` **identifiers**: readonly `string`[]

All transaction IDs of the submitted transaction.

***

### indexerId

> `readonly` **indexerId**: `number`

The indexer internal db ID.

***

### protocolVersion

> `readonly` **protocolVersion**: `number`

The protocol version of the transaction.

***

### segmentStatusMap

> `readonly` **segmentStatusMap**: `Map`\<`number`, [`SegmentStatus`](../type-aliases/SegmentStatus.md)\> \| `undefined`

The map that associates segment identifiers (numbers) with their corresponding status [SegmentStatus](../type-aliases/SegmentStatus.md).
The segment identifier is represented as a number (key in the map), and the status indicates the success or failure of the transaction update.

***

### status

> `readonly` **status**: [`TxStatus`](../type-aliases/TxStatus.md)

The status of a submitted transaction.

***

### tx

> `readonly` **tx**: `Transaction`\<`SignatureEnabled`, `Proof`, `Binding`\>

The transaction that was finalized.

***

### txHash

> `readonly` **txHash**: `string`

The transaction hash of the transaction in which the original transaction was included.

***

### txId

> `readonly` **txId**: `string`

One of the transaction ID of the submitted transaction.

***

### unshielded

> `readonly` **unshielded**: [`UnshieldedUtxos`](../type-aliases/UnshieldedUtxos.md)

Represents the unshielded outputs, typically used for transactions or operations
involving data or values that are not encrypted or concealed.
