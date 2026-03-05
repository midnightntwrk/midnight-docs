[**@midnight-ntwrk/onchain-runtime v2.0.1**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / ShieldedCoinInfo

# Type Alias: ShieldedCoinInfo

```ts
type ShieldedCoinInfo: {
  nonce: Nonce;
  type: RawTokenType;
  value: bigint;
};
```

Information required to create a new coin, alongside details about the
recipient

## Type declaration

### nonce

```ts
nonce: Nonce;
```

The coin's randomness, preventing it from colliding with other coins

### type

```ts
type: RawTokenType;
```

The coin's type, identifying the currency it represents

### value

```ts
value: bigint;
```

The coin's value, in atomic units dependent on the currency

Bounded to be a non-negative 64-bit integer
