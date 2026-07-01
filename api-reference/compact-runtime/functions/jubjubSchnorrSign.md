[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / jubjubSchnorrSign

# Function: jubjubSchnorrSign()

```ts
function jubjubSchnorrSign<A>(
   rtType, 
   msg, 
   signingKey): JubjubSchnorrSignature;
```

Produces a Schnorr signature over the JubJub curve.

- `rtType` / `msg`: the message as a typed Compact value
- `sk`: signing key as a JubJub scalar (e.g. as returned by [jubjubSampleScalar](jubjubSampleScalar.md))

The signature scheme:
- Nonce `r` sampled uniformly at random
- Announcement `R = r·G`
- Challenge `c = PoseidonHash(R.x, R.y, pk.x, pk.y, msg...)`
- Response `s = r + c·sk` (in the JubJub scalar field)

## Type Parameters

### A

`A`

## Parameters

### rtType

[`CompactType`](../interfaces/CompactType.md)\<`A`\>

### msg

`A`

### signingKey

`bigint`

## Returns

[`JubjubSchnorrSignature`](../interfaces/JubjubSchnorrSignature.md)
