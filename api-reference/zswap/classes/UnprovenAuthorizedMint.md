[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / UnprovenAuthorizedMint

# Class: UnprovenAuthorizedMint

A request to mint a coin, authorized by the mint's recipient, without the
proof for the authorization being generated

## Properties

### coin

```ts
readonly coin: CoinInfo;
```

The coin to be minted

***

### recipient

```ts
readonly recipient: string;
```

The recipient of this mint

## Methods

### erase\_proof()

```ts
erase_proof(): ProofErasedAuthorizedMint
```

#### Returns

[`ProofErasedAuthorizedMint`](ProofErasedAuthorizedMint.md)

***

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
static deserialize(raw, netid): UnprovenAuthorizedMint
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenAuthorizedMint`](UnprovenAuthorizedMint.md)
