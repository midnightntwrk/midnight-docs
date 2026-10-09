[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256r1EcdsaRecover

# Function: secp256r1EcdsaRecover()

```ts
function secp256r1EcdsaRecover(
   msgHash, 
   sig, 
   recoveryId): Secp256r1Point;
```

Recover the secp256r1 public key from an ECDSA signature and a message hash.

The recovery id means the same thing as it does for [secp256k1EcdsaRecover](secp256k1EcdsaRecover.md).

## Parameters

### msgHash

`Uint8Array`

### sig

#### r

`bigint`

#### s

`bigint`

### recoveryId

`number`

## Returns

[`Secp256r1Point`](../interfaces/Secp256r1Point.md)
