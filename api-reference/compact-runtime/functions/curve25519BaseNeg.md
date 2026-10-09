[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / curve25519BaseNeg

# Function: curve25519BaseNeg()

```ts
function curve25519BaseNeg(x): bigint;
```

Curve25519 base field negation

This function returns the negation of x in the Curve25519 base field.  That
is, a value y such that x + y = 0 (modulo CURVE25519_BASE_MODULUS).  x is
assumed to be in the range [0, CURVE25519_BASE_MODULUS).

## Parameters

### x

`bigint`

## Returns

`bigint`
