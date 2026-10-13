[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / curve25519ScalarNeg

# Function: curve25519ScalarNeg()

```ts
function curve25519ScalarNeg(x): bigint;
```

Curve25519 scalar field negation

This function returns the negation of x in the Curve25519 scalar field.  That
is, a value y such that x + y = 0 (modulo CURVE25519_SCALAR_MODULUS).  x is
assumed to be in the range [0, CURVE25519_SCALAR_MODULUS).

## Parameters

### x

`bigint`

## Returns

`bigint`
