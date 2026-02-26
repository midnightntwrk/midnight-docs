[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / LedgerParameters

# Class: LedgerParameters

Parameters used by the Midnight ledger, including transaction fees and
bounds

## Properties

### transactionCostModel

```ts
readonly transactionCostModel: TransactionCostModel;
```

The cost model used for transaction fees contained in these parameters

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
static deserialize(raw, netid): LedgerParameters
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`LedgerParameters`](LedgerParameters.md)

***

### dummyParameters()

```ts
static dummyParameters(): LedgerParameters
```

A dummy set of testing parameters

#### Returns

[`LedgerParameters`](LedgerParameters.md)
