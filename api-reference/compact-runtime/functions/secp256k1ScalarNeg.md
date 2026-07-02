[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256k1ScalarNeg

# Function: secp256k1ScalarNeg()

```ts
function secp256k1ScalarNeg(x): bigint;
```

Secp256k1 scalar field negation

This function returns the negation of x in the secp256k1 scalar field.  That
is, a value y such that x + y = 0 (modulo SECP256K1_SCALAR_MODULUS).  x is
assumed to be in the range [0, SECP256K1_SCALAR_MODULUS).

## Parameters

### x

`bigint`

## Returns

`bigint`
