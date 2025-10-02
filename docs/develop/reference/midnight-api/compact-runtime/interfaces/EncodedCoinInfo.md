[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / EncodedCoinInfo

# Interface: EncodedCoinInfo

A [CoinInfo](../type-aliases/CoinInfo.md) with its fields encoded as byte strings. This representation is used internally by
the contract executable.

## Properties

### color

```ts
readonly color: Uint8Array;
```

The coin's type, identifying the currency it represents.

***

### nonce

```ts
readonly nonce: Uint8Array;
```

The coin's randomness, preventing it from colliding with other coins.

***

### value

```ts
readonly value: bigint;
```

The coin's value, in atomic units dependent on the currency. Bounded to be a non-negative 64-bit integer.
