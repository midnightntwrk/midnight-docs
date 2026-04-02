[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / UnprovenTransient

# Class: UnprovenTransient

A [Transient](Transient.md), before being proven

All "shielded" information in the transient can still be extracted at this
stage!

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
static deserialize(raw, netid): UnprovenTransient
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenTransient`](UnprovenTransient.md)

***

### newFromContractOwnedOutput()

```ts
static newFromContractOwnedOutput(
   coin, 
   segment, 
   output): UnprovenTransient
```

Creates a new contract-owned transient, from a given output and its coin.

The [QualifiedCoinInfo](../type-aliases/QualifiedCoinInfo.md) should have an `mt_index` of `0`

#### Parameters

##### coin

[`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

##### segment

`number`

##### output

[`UnprovenOutput`](UnprovenOutput.md)

#### Returns

[`UnprovenTransient`](UnprovenTransient.md)
