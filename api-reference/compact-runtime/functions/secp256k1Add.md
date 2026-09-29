[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256k1Add

# Function: secp256k1Add()

```ts
function secp256k1Add(a, b): Secp256k1Point;
```

**`Internal`**

The Compact builtin `ecAdd` function for secp256k1 points.

This function adds two elliptic curve points. The points are assumed to be
valid, points passed from compiler-generated code are always valid ones.

## Parameters

### a

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)

### b

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)

## Returns

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)
