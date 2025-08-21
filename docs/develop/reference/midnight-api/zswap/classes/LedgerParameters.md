**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / LedgerParameters

# Class: LedgerParameters

Parameters used by the Midnight ledger, including transaction fees and
bounds

## Constructors

### new LedgerParameters()

```ts
private new LedgerParameters(): LedgerParameters
```

#### Returns

[`LedgerParameters`](LedgerParameters.md)

## Properties

### transactionCostModel

```ts
readonly transactionCostModel: TransactionCostModel;
```

The cost model used for transaction fees contained in these parameters

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
static deserialize(raw, netid): LedgerParameters
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

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
