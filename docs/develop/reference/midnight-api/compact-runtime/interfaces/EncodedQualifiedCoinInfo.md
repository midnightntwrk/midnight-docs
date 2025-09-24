[**@midnight-ntwrk/compact-runtime v0.10.1**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / EncodedQualifiedCoinInfo

# Interface: EncodedQualifiedCoinInfo

A [QualifiedCoinInfo](../type-aliases/QualifiedCoinInfo.md) with its fields encoded as byte strings. This representation is used internally by
the contract executable.

## Extends

- [`EncodedCoinInfo`](EncodedCoinInfo.md)

## Properties

### color

```ts
readonly color: Uint8Array;
```

The coin's type, identifying the currency it represents.

#### Inherited from

[`EncodedCoinInfo`](EncodedCoinInfo.md).[`color`](EncodedCoinInfo.md#color)

***

### mt\_index

```ts
readonly mt_index: bigint;
```

The coin's location in the chain's Merkle tree of coin commitments. Bounded to be a non-negative 64-bit integer.

***

### nonce

```ts
readonly nonce: Uint8Array;
```

The coin's randomness, preventing it from colliding with other coins.

#### Inherited from

[`EncodedCoinInfo`](EncodedCoinInfo.md).[`nonce`](EncodedCoinInfo.md#nonce)

***

### value

```ts
readonly value: bigint;
```

The coin's value, in atomic units dependent on the currency. Bounded to be a non-negative 64-bit integer.

#### Inherited from

[`EncodedCoinInfo`](EncodedCoinInfo.md).[`value`](EncodedCoinInfo.md#value)
