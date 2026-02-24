**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / signData

# Function: signData()

```ts
signData(key, data): Signature
```

Signs arbitrary data with the given signing key.

WARNING: Do not expose access to this function for valuable keys for data
that is not strictly controlled!

## Parameters

• **key**: `string`

• **data**: `Uint8Array`

## Returns

[`Signature`](../type-aliases/Signature.md)
