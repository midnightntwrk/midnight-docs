[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / QualifiedCoinInfo

# Type Alias: QualifiedCoinInfo

```ts
type QualifiedCoinInfo = {
  mt_index: bigint;
  nonce: Nonce;
  type: TokenType;
  value: bigint;
};
```

Information required to spend an existing coin, alongside authorization of
the owner

## Properties

### mt\_index

```ts
mt_index: bigint;
```

The coin's location in the chain's Merkle tree of coin commitments

Bounded to be a non-negative 64-bit integer

***

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
