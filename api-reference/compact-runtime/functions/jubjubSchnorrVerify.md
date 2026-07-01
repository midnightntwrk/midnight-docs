[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / jubjubSchnorrVerify

# Function: jubjubSchnorrVerify()

```ts
function jubjubSchnorrVerify<A>(
   rtType, 
   msg, 
   verifyingKey, 
   sig): boolean;
```

Verifies a Schnorr signature over the JubJub curve.

- `rtType` / `msg`: the message as a typed Compact value
- `pk`: verifying key (a JubJubPoint / EmbeddedGroupAffine)
- `sig`: signature as returned by [jubjubSchnorrSign](jubjubSchnorrSign.md)

Returns `true` if the signature is valid (i.e. `s·G == R + c·pk`).

## Type Parameters

### A

`A`

## Parameters

### rtType

[`CompactType`](../interfaces/CompactType.md)\<`A`\>

### msg

`A`

### verifyingKey

[`JubjubPoint`](../interfaces/JubjubPoint.md)

### sig

[`JubjubSchnorrSignature`](../interfaces/JubjubSchnorrSignature.md)

## Returns

`boolean`
