[**@midnight-ntwrk/compact-runtime v0.19.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / sampleSigningKey

# Function: sampleSigningKey()

```ts
function sampleSigningKey(kind?): SigningKey;
```

Randomly samples a [SigningKey](../type-aliases/SigningKey.md). If `kind` is not supplied, assumes
`schnorr`.

## Parameters

### kind?

`SignatureKind`

## Returns

[`SigningKey`](../type-aliases/SigningKey.md)
