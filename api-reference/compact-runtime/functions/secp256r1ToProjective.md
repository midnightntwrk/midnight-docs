[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256r1ToProjective

# Function: secp256r1ToProjective()

```ts
function secp256r1ToProjective(p): WeierstrassPoint<bigint>;
```

**`Internal`**

Lift the simple affine `Secp256r1Point` representation into a noble-curves
projective point. The point is assumed to be valid, points passed from
compiler-generated code are always valid ones.

## Parameters

### p

[`Secp256r1Point`](../interfaces/Secp256r1Point.md)

## Returns

`WeierstrassPoint`\<`bigint`\>
