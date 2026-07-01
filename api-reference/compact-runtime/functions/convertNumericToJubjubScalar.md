[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / convertNumericToJubjubScalar

# Function: convertNumericToJubjubScalar()

```ts
function convertNumericToJubjubScalar(x): bigint;
```

Conversion of a native field or unsigned integer value to a JubjubScalar

The native field is BLS12-381 scalar, which has a larger field modulus than
the Jubjub scalar field.  The value is converted modulo the Jubjub scalar field modulus.

## Parameters

### x

`bigint`

## Returns

`bigint`
