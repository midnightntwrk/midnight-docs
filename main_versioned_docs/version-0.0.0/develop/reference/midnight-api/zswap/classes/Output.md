**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / Output

# Class: Output

A shielded transaction output

## Constructors

### new Output()

```ts
private new Output(): Output
```

#### Returns

[`Output`](Output.md)

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
static deserialize(raw, netid): Output
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`Output`](Output.md)
