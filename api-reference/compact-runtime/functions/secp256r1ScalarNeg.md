[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256r1ScalarNeg

# Function: secp256r1ScalarNeg()

```ts
function secp256r1ScalarNeg(x): bigint;
```

Secp256r1 scalar field negation

This function returns the negation of x in the secp256r1 scalar field.  That
is, a value y such that x + y = 0 (modulo SECP256R1_SCALAR_MODULUS).  x is
assumed to be in the range [0, SECP256R1_SCALAR_MODULUS).

## Parameters

### x

`bigint`

## Returns

`bigint`
