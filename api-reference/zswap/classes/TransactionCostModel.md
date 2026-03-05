[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / TransactionCostModel

# Class: TransactionCostModel

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
serialize(netid): Uint8Array<ArrayBufferLike>
```

#### Parameters

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw, netid): TransactionCostModel
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

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
