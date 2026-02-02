**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / ProofErasedOutput

# Class: ProofErasedOutput

An [Output](Output.md) with all proof information erased

Primarily for use in testing, or handling data known to be correct from
external information

## Constructors

### new ProofErasedOutput()

```ts
private new ProofErasedOutput(): ProofErasedOutput
```

#### Returns

[`ProofErasedOutput`](ProofErasedOutput.md)

## Properties

### commitment

```ts
readonly commitment: string;
```

The commitment of the output

***

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

The contract address receiving the output, if the recipient is a contract

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
static deserialize(raw, netid): ProofErasedOutput
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ProofErasedOutput`](ProofErasedOutput.md)
