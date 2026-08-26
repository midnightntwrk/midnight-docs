[**@midnight-ntwrk/compact-runtime v0.19.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256k1ToProjective

# Function: secp256k1ToProjective()

```ts
function secp256k1ToProjective(p): WeierstrassPoint<bigint>;
```

Lift the simple affine `Secp256k1Point` representation into a noble-curves
projective point. Identity maps to `Point.ZERO`; every other input is validated
to lie on the curve by `fromAffine`.

## Parameters

### p

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)

## Returns

`WeierstrassPoint`\<`bigint`\>
