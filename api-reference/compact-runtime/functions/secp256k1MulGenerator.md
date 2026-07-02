[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256k1MulGenerator

# Function: secp256k1MulGenerator()

```ts
function secp256k1MulGenerator(b): Secp256k1Point;
```

The Compact builtin `ecMulGenerator` function for secp256k1 points.

`multiplyUnsafe` is used, instead of `multiply`, because the latter rejects a zero scalar; the
"unsafe" (variable-time) is due to non-constant time operations, which we don't guarantee
anyways.

## Parameters

### b

`bigint`

## Returns

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)
