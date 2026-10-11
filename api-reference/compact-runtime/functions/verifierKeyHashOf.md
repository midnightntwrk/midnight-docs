[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / verifierKeyHashOf

# Function: verifierKeyHashOf()

```ts
function verifierKeyHashOf(verifierKey): VerifierKeyHash;
```

Fingerprints a deployed operation's verifier key, by the same computation the compiler applies to
`keys/<circuit>.verifier`. Throws on an empty key: that is `OperationAbsent`, for the caller to
raise.

## Parameters

### verifierKey

`Uint8Array`

## Returns

[`VerifierKeyHash`](../type-aliases/VerifierKeyHash.md)
