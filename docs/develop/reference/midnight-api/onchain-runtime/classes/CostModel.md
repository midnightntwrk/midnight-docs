**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / CostModel

# Class: CostModel

A cost model for calculating transaction fees

## Constructors

### new CostModel()

```ts
private new CostModel(): CostModel
```

#### Returns

[`CostModel`](CostModel.md)

## Methods

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`

***

### dummyCostModel()

```ts
static dummyCostModel(): CostModel
```

A cost model for use in non-critical contexts

#### Returns

[`CostModel`](CostModel.md)
