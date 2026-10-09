[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256k1ToProjective

# Function: secp256k1ToProjective()

```ts
function secp256k1ToProjective(p): WeierstrassPoint<bigint>;
```

**`Internal`**

Lift the simple affine `Secp256k1Point` representation into a noble-curves
projective point. The point is assumed to be valid, points passed from
compiler-generated code are always valid ones.

## Parameters

### p

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)

## Returns

`WeierstrassPoint`\<`bigint`\>
