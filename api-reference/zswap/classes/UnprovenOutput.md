[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / UnprovenOutput

# Class: UnprovenOutput

An [Output](Output.md) before being proven

All "shielded" information in the output can still be extracted at this
stage!

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
static deserialize(raw, netid): UnprovenOutput
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenOutput`](UnprovenOutput.md)

***

### new()

```ts
static new(
   coin, 
   segment, 
   target_cpk, 
   target_epk): UnprovenOutput
```

Creates a new output, targeted to a user's coin public key.

Optionally the output contains a ciphertext encrypted to the user's
encryption public key, which may be omitted *only* if the [CoinInfo](../type-aliases/CoinInfo.md)
is transferred to the recipient another way

#### Parameters

##### coin

[`CoinInfo`](../type-aliases/CoinInfo.md)

##### segment

`number`

##### target\_cpk

`string`

##### target\_epk

`string`

#### Returns

[`UnprovenOutput`](UnprovenOutput.md)

***

### newContractOwned()

```ts
static newContractOwned(
   coin, 
   segment, 
   contract): UnprovenOutput
```

Creates a new output, targeted to a smart contract

A contract must *also* explicitly receive a coin created in this way for
the output to be valid

#### Parameters

##### coin

[`CoinInfo`](../type-aliases/CoinInfo.md)

##### segment

`number`

##### contract

`string`

#### Returns

[`UnprovenOutput`](UnprovenOutput.md)
