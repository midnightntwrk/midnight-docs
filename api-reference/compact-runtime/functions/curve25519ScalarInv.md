[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / curve25519ScalarInv

# Function: curve25519ScalarInv()

```ts
function curve25519ScalarInv(x): bigint;
```

Curve25519 scalar field inverse

This function returns the multiplicative inverse of x in the Curve25519 scalar
field.  That is, a value y such that x * y = 1 (modulo CURVE25519_SCALAR_MODULUS).
x is assumed to be in the range (0, CURVE25519_SCALAR_MODULUS).

## Parameters

### x

`bigint`

## Returns

`bigint`
