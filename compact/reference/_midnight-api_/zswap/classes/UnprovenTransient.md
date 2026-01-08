**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / UnprovenTransient

# Class: UnprovenTransient

A [Transient](Transient.md), before being proven

All "shielded" information in the transient can still be extracted at this
stage!

## Constructors

### new UnprovenTransient()

```ts
private new UnprovenTransient(): UnprovenTransient
```

#### Returns

[`UnprovenTransient`](UnprovenTransient.md)

## Properties

### commitment

```ts
readonly commitment: string;
```

The commitment of the transient

***

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

The contract address creating the transient, if applicable

***

### nullifier

```ts
readonly nullifier: string;
```

The nullifier of the transient

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
static deserialize(raw, netid): UnprovenTransient
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenTransient`](UnprovenTransient.md)

***

### newFromContractOwnedOutput()

```ts
static newFromContractOwnedOutput(coin, output): UnprovenTransient
```

Creates a new contract-owned transient, from a given output and its coin.

The [QualifiedCoinInfo](../type-aliases/QualifiedCoinInfo.md) should have an `mt_index` of `0`

#### Parameters

• **coin**: [`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

• **output**: [`UnprovenOutput`](UnprovenOutput.md)

#### Returns

[`UnprovenTransient`](UnprovenTransient.md)
