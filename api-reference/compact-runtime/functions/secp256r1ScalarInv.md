[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256r1ScalarInv

# Function: secp256r1ScalarInv()

```ts
function secp256r1ScalarInv(x): bigint;
```

Secp256r1 scalar field inverse

This function returns the multiplicative inverse of x in the secp256r1 scalar
field.  That is, a value y such that x * y = 1 (modulo
SECP256R1_SCALAR_MODULUS).  x is assumed to be in the range
(0, SECP256R1_SCALAR_MODULUS).

## Parameters

### x

`bigint`

## Returns

`bigint`
