[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / AuthorizedMint

# Class: AuthorizedMint

A request to mint a coin, authorized by the mint's recipient

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
static deserialize(raw, netid): AuthorizedMint
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`AuthorizedMint`](AuthorizedMint.md)
