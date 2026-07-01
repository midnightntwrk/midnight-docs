[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / jubjubSchnorrVerifyingKey

# Function: jubjubSchnorrVerifyingKey()

```ts
function jubjubSchnorrVerifyingKey(signingKey): JubjubPoint;
```

Derives the Schnorr verifying key (public key) from a signing key.

Equivalent to [ecMulGenerator](ecMulGenerator.md)(signingKey).

## Parameters

### signingKey

`bigint`

## Returns

[`JubjubPoint`](../interfaces/JubjubPoint.md)
