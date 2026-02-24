**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / TransactionCostModel

# Class: TransactionCostModel

## Constructors

### new TransactionCostModel()

```ts
private new TransactionCostModel(): TransactionCostModel
```

#### Returns

[`TransactionCostModel`](TransactionCostModel.md)

## Properties

### inputFeeOverhead

```ts
readonly inputFeeOverhead: bigint;
```

The increase in fees to expect from adding a new input to a transaction

***

### outputFeeOverhead

```ts
readonly outputFeeOverhead: bigint;
```

The increase in fees to expect from adding a new output to a transaction

## Methods

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

### deserialize()

```ts
static deserialize(raw, netid): TransactionCostModel
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`TransactionCostModel`](TransactionCostModel.md)

***

### dummyTransactionCostModel()

```ts
static dummyTransactionCostModel(): TransactionCostModel
```

A dummy cost model, for use in testing

#### Returns

[`TransactionCostModel`](TransactionCostModel.md)
