[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256r1Mul

# Function: secp256r1Mul()

```ts
function secp256r1Mul(a, b): Secp256r1Point;
```

**`Internal`**

The Compact builtin `ecMul` function for secp256r1 points.

The point is assumed to be valid, points passed from compiler-generated code
are always valid ones.

## Parameters

### a

[`Secp256r1Point`](../interfaces/Secp256r1Point.md)

### b

`bigint`

## Returns

[`Secp256r1Point`](../interfaces/Secp256r1Point.md)
