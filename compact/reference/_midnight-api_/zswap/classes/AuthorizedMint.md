**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / AuthorizedMint

# Class: AuthorizedMint

A request to mint a coin, authorized by the mint's recipient

## Constructors

### new AuthorizedMint()

```ts
private new AuthorizedMint(): AuthorizedMint
```

#### Returns

[`AuthorizedMint`](AuthorizedMint.md)

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
static deserialize(raw, netid): AuthorizedMint
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`AuthorizedMint`](AuthorizedMint.md)
