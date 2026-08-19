[**@midnight-ntwrk/compact-runtime v0.19.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256k1FromProjective

# Function: secp256k1FromProjective()

```ts
function secp256k1FromProjective(p): Secp256k1Point;
```

Project a noble-curves point back down to the simple affine
`Secp256k1Point` representation.

## Parameters

### p

`WeierstrassPoint`\<`bigint`\>

## Returns

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)
