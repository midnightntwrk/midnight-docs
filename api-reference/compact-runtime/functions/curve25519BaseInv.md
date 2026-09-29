[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / curve25519BaseInv

# Function: curve25519BaseInv()

```ts
function curve25519BaseInv(x): bigint;
```

Curve25519 base field inverse

This function returns the multiplicative inverse of x in the Curve25519 base
field.  That is, a value y such that x * y = 1 (modulo CURVE25519_BASE_MODULUS).
x is assumed to be in the range (0, CURVE25519_BASE_MODULUS).

## Parameters

### x

`bigint`

## Returns

`bigint`
