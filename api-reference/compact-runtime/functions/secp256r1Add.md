[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256r1Add

# Function: secp256r1Add()

```ts
function secp256r1Add(a, b): Secp256r1Point;
```

**`Internal`**

The Compact builtin `ecAdd` function for secp256r1 points.

This function adds two elliptic curve points. The points are assumed to be
valid, points passed from compiler-generated code are always valid ones.

## Parameters

### a

[`Secp256r1Point`](../interfaces/Secp256r1Point.md)

### b

[`Secp256r1Point`](../interfaces/Secp256r1Point.md)

## Returns

[`Secp256r1Point`](../interfaces/Secp256r1Point.md)
