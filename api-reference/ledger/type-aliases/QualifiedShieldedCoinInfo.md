[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / QualifiedShieldedCoinInfo

# Type Alias: QualifiedShieldedCoinInfo

```ts
type QualifiedShieldedCoinInfo = {
  mt_index: bigint;
  nonce: Nonce;
  type: RawTokenType;
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
type: RawTokenType;
```

The coin's type, identifying the currency it represents

***

### value

```ts
value: bigint;
```

The coin's value, in atomic units dependent on the currency

Bounded to be a non-negative 64-bit integer
