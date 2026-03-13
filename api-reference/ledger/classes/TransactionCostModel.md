[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / TransactionCostModel

# Class: TransactionCostModel

## Properties

### baselineCost

```ts
readonly baselineCost: RunningCost;
```

A baseline cost to begin with

***

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

***

### runtimeCostModel

```ts
readonly runtimeCostModel: CostModel;
```

A cost model for calculating transaction fees

## Methods

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw): TransactionCostModel;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`TransactionCostModel`

***

### initialTransactionCostModel()

```ts
static initialTransactionCostModel(): TransactionCostModel;
```

The initial cost model of Midnight

#### Returns

`TransactionCostModel`
