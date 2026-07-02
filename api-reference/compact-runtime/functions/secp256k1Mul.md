[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256k1Mul

# Function: secp256k1Mul()

```ts
function secp256k1Mul(a, b): Secp256k1Point;
```

The Compact builtin `ecMul` function for secp256k1 points.

`multiplyUnsafe` is used, instead of `multiply`, because the latter rejects a zero scalar; the
"unsafe" (variable-time) is due to non-constant time operations, which we don't guarantee
anyways.

## Parameters

### a

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)

### b

`bigint`

## Returns

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)
