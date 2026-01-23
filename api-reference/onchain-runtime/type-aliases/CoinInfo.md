**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / CoinInfo

# Type alias: CoinInfo

```ts
type CoinInfo: {
  nonce: Nonce;
  type: TokenType;
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
type: TokenType;
```

The coin's type, identifying the currency it represents

### value

```ts
value: bigint;
```

The coin's value, in atomic units dependent on the currency

Bounded to be a non-negative 64-bit integer
