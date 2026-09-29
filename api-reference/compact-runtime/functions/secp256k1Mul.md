[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256k1Mul

# Function: secp256k1Mul()

```ts
function secp256k1Mul(a, b): Secp256k1Point;
```

**`Internal`**

The Compact builtin `ecMul` function for secp256k1 points.

The point is assumed to be valid, points passed from compiler-generated code
are always valid ones.

## Parameters

### a

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)

### b

`bigint`

## Returns

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)
