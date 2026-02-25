[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / ProofErasedAuthorizedMint

# Class: ProofErasedAuthorizedMint

A request to mint a coin, authorized by the mint's recipient, with the
authorizing proof having been erased

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
static deserialize(raw, netid): ProofErasedAuthorizedMint
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ProofErasedAuthorizedMint`](ProofErasedAuthorizedMint.md)
