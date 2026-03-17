[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / Transient

# Class: Transient

A shielded "transient"; an output that is immediately spent within the same
transaction

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
static deserialize(raw, netid): Transient
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`Transient`](Transient.md)
