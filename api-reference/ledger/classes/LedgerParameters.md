[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / LedgerParameters

# Class: LedgerParameters

Parameters used by the Midnight ledger, including transaction fees and
bounds

## Properties

### dust

```ts
readonly dust: DustParameters;
```

The parameters associated with DUST.

***

### feePrices

```ts
readonly feePrices: FeePrices;
```

The fee prices for transaction

***

### transactionCostModel

```ts
readonly transactionCostModel: TransactionCostModel;
```

The cost model used for transaction fees contained in these parameters

## Methods

### maxPriceAdjustment()

```ts
maxPriceAdjustment(): number;
```

The maximum price adjustment per block with the current parameters, as a multiplicative
factor (that is: 1.1 would indicate a 10% adjustment). Will always return the positive (>1)
adjustment factor. Note that negative adjustments are the additive inverse (1.1 has a
corresponding 0.9 downward adjustment), *not* the multiplicative as might reasonably be
assumed.

#### Returns

`number`

***

### normalizeFullness()

```ts
normalizeFullness(fullness): NormalizedCost;
```

Normalizes a detailed block fullness cost to the block limits.

#### Parameters

##### fullness

[`SyntheticCost`](../type-aliases/SyntheticCost.md)

#### Returns

[`NormalizedCost`](../type-aliases/NormalizedCost.md)

#### Throws

if any of the block limits is exceeded

***

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
static deserialize(raw): LedgerParameters;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`LedgerParameters`

***

### initialParameters()

```ts
static initialParameters(): LedgerParameters;
```

The initial parameters of Midnight

#### Returns

`LedgerParameters`
