**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / Transaction

# Class: Transaction

A Midnight transaction, consisting a guaranteed and fallible [Offer](Offer.md),
and contract call information hidden from this API.

The guaranteed section are run first, and fee payment is taken during this
part. If it succeeds, the fallible section is also run, and atomically
rolled back if it fails.

## Constructors

### new Transaction()

```ts
private new Transaction(): Transaction
```

#### Returns

[`Transaction`](Transaction.md)

## Properties

### fallibleCoins

```ts
readonly fallibleCoins: undefined | Offer;
```

The fallible Zswap offer

***

### guaranteedCoins

```ts
readonly guaranteedCoins: undefined | Offer;
```

The guaranteed Zswap offer

***

### mint

```ts
readonly mint: undefined | AuthorizedMint;
```

The mint this transaction represents, if applicable

## Methods

### eraseProofs()

```ts
eraseProofs(): ProofErasedTransaction
```

Erases the proofs contained in this transaction

#### Returns

[`ProofErasedTransaction`](ProofErasedTransaction.md)

***

### fees()

```ts
fees(params): bigint
```

The cost of this transaction, in the atomic unit of the base token

#### Parameters

• **params**: [`LedgerParameters`](LedgerParameters.md)

#### Returns

`bigint`

***

### identifiers()

```ts
identifiers(): string[]
```

Returns the set of identifiers contained within this transaction. Any of
these *may* be used to watch for a specific transaction.

#### Returns

`string`[]

***

### imbalances()

```ts
imbalances(guaranteed, fees?): Map<string, bigint>
```

For given fees, and a given section (guaranteed/fallible), what the
surplus or deficit of this transaction in any token type is.

#### Parameters

• **guaranteed**: `boolean`

• **fees?**: `bigint`

#### Returns

`Map`\<`string`, `bigint`\>

***

### merge()

```ts
merge(other): Transaction
```

Merges this transaction with another

#### Parameters

• **other**: [`Transaction`](Transaction.md)

#### Returns

[`Transaction`](Transaction.md)

#### Throws

If both transactions have contract interactions, or they spend the
same coins

***

### serialize()

```ts
serialize(netid): Uint8Array
```

#### Parameters

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`

***

### transactionHash()

```ts
transactionHash(): string
```

Returns the hash associated with this transaction. Due to the ability to
merge transactions, this should not be used to watch for a specific
transaction.

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw, netid): Transaction
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`Transaction`](Transaction.md)

***

### fromUnproven()

```ts
static fromUnproven(prove, unproven): Promise<Transaction>
```

Type hint that you should use an external proving function, for instance
via the proof server.

#### Parameters

• **prove**

• **unproven**: [`UnprovenTransaction`](UnprovenTransaction.md)

#### Returns

`Promise`\<[`Transaction`](Transaction.md)\>
