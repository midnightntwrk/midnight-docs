[**@midnight-ntwrk/compact-runtime v0.19.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / secp256k1EcdsaRecover

# Function: secp256k1EcdsaRecover()

```ts
function secp256k1EcdsaRecover(
   msgHash, 
   sig, 
   recoveryId): Secp256k1Point;
```

Recover the secp256k1 public key from an ECDSA signature and a message hash.

## Recovery ID
- bit 0 (`recoveryId & 1`) is the parity of `R.y`: 0 for even, 1 for odd.
- bit 1 (`recoveryId >= 2`) says whether the reduction wrapped, i.e. whether
  `R.x` is `r` (0, 1) or `r + n` (2, 3).

- 0: `R = (r, y)` with `y` even — the common case.
- 1: `R = (r, y)` with `y` odd — the other common case.
- 2: `R = (r + n, y)` with `y` even.
- 3: `R = (r + n, y)` with `y` odd.

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

[`Secp256k1Point`](../interfaces/Secp256k1Point.md)
