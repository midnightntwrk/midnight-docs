[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256r1FromProjective

# Function: secp256r1FromProjective()

```ts
function secp256r1FromProjective(p): Secp256r1Point;
```

Project a noble-curves point back down to the simple affine
`Secp256r1Point` representation.

## Parameters

### p

`WeierstrassPoint`\<`bigint`\>

## Returns

[`Secp256r1Point`](../interfaces/Secp256r1Point.md)
