[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / VerifierKeyHash

# Type Alias: VerifierKeyHash

```ts
type VerifierKeyHash = string & {
  [VerifierKeyHashBrand]: "VerifierKeyHash";
};
```

The SHA-256 of one deployed operation's verifier key, as lowercase hex.

Branded so both sides of the implementation check are validated before they meet, and can differ
only in content — a format difference would otherwise read as a substituted contract.

## Type Declaration

### \[VerifierKeyHashBrand\]

```ts
readonly [VerifierKeyHashBrand]: "VerifierKeyHash";
```
