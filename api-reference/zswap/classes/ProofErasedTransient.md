**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / ProofErasedTransient

# Class: ProofErasedTransient

A [Transient](Transient.md), with all proof information erased

Primarily for use in testing, or handling data known to be correct from
external information

## Constructors

### new ProofErasedTransient()

```ts
private new ProofErasedTransient(): ProofErasedTransient
```

#### Returns

[`ProofErasedTransient`](ProofErasedTransient.md)

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
static deserialize(raw, netid): ProofErasedTransient
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ProofErasedTransient`](ProofErasedTransient.md)
