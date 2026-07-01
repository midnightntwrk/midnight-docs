[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / signData

# Function: signData()

```ts
function signData(key, data): Signature;
```

Signs arbitrary data with the given signing key.

WARNING: Do not expose access to this function for valuable keys for data
that is not strictly controlled!

## Parameters

### key

[`SigningKey`](../type-aliases/SigningKey.md)

### data

`Uint8Array`

## Returns

[`Signature`](../type-aliases/Signature.md)
