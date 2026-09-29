[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / asVerifierKeyHash

# Function: asVerifierKeyHash()

```ts
function asVerifierKeyHash(hex): VerifierKeyHash;
```

Converts a raw digest to the brand. Rejects rather than normalizes: a digest that needed
normalizing didn't come from `compactc` or the ledger.

## Parameters

### hex

`string`

## Returns

[`VerifierKeyHash`](../type-aliases/VerifierKeyHash.md)
