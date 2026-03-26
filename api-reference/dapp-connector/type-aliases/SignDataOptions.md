[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / SignDataOptions

# Type Alias: SignDataOptions

> **SignDataOptions** = `object`

Options for signing data. It specified which key to use for signing and how the data to sign is encoded.

## Properties

### encoding

> **encoding**: `"hex"` \| `"base64"` \| `"text"`

How are data for signing encoded.
"hex" and "base64" mean binary data are encoded using one or the other format,
  the wallet must decode them into binary sequence first
"text" means the data should be signed as provided in the string, but encoded into UTF-8 as a normalization step.
  Conversion is necessary, because JS strings are UTF-16

***

### keyType

> **keyType**: `"unshielded"`

What kind of key to use for signing
