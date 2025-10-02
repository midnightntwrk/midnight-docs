[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CoinInfo

# Type Alias: CoinInfo

```ts
type CoinInfo = {
  nonce: Nonce;
  type: TokenType;
  value: bigint;
};
```

Information required to create a new coin, alongside details about the
recipient

## Properties

### nonce

```ts
nonce: Nonce;
```

The coin's randomness, preventing it from colliding with other coins

***

### type

```ts
type: TokenType;
```

The coin's type, identifying the currency it represents

***

### value

```ts
value: bigint;
```

The coin's value, in atomic units dependent on the currency

Bounded to be a non-negative 64-bit integer
