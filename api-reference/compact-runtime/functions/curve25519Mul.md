[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / curve25519Mul

# Function: curve25519Mul()

```ts
function curve25519Mul(a, b): Curve25519Point;
```

**`Internal`**

The Compact builtin `ecMul` function for Curve25519 points.

The points are assumed to be valid, points passed from
compiler-generated code are always valid ones.

## Parameters

### a

[`Curve25519Point`](../interfaces/Curve25519Point.md)

### b

`bigint`

## Returns

[`Curve25519Point`](../interfaces/Curve25519Point.md)
