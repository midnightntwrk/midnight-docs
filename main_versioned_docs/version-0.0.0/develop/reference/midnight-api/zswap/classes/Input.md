**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / Input

# Class: Input

A shielded transaction input

## Constructors

### new Input()

```ts
private new Input(): Input
```

#### Returns

[`Input`](Input.md)

## Properties

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

The contract address receiving the input, if the sender is a contract

***

### nullifier

```ts
readonly nullifier: string;
```

The nullifier of the input

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
static deserialize(raw, netid): Input
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`Input`](Input.md)
