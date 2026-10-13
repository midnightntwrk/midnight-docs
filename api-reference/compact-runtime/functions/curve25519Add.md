[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / curve25519Add

# Function: curve25519Add()

```ts
function curve25519Add(a, b): Curve25519Point;
```

**`Internal`**

The Compact builtin `ecAdd` function for Curve25519 points.

This function adds two elliptic curve points. The points are assumed to be
valid, points passed from compiler-generated code are always valid ones.

## Parameters

### a

[`Curve25519Point`](../interfaces/Curve25519Point.md)

### b

[`Curve25519Point`](../interfaces/Curve25519Point.md)

## Returns

[`Curve25519Point`](../interfaces/Curve25519Point.md)
