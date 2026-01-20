**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / ProofErasedAuthorizedMint

# Class: ProofErasedAuthorizedMint

A request to mint a coin, authorized by the mint's recipient, with the
authorizing proof having been erased

## Constructors

### new ProofErasedAuthorizedMint()

```ts
private new ProofErasedAuthorizedMint(): ProofErasedAuthorizedMint
```

#### Returns

[`ProofErasedAuthorizedMint`](ProofErasedAuthorizedMint.md)

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
static deserialize(raw, netid): ProofErasedAuthorizedMint
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ProofErasedAuthorizedMint`](ProofErasedAuthorizedMint.md)
