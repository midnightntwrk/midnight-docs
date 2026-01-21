[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / isHex

# Function: isHex()

> **isHex**(`source`, `byteLen`?): `boolean`

Determines if a string represents a hex-encoded sequence of bytes.

## Parameters

### source

`string`

The source string.

### byteLen?

`number`

An optional number of bytes that `source` should represent. If not specified
then any number of bytes can be represented by `source`.

## Returns

`boolean`

`true` if the `source` string is parsable as a hex-string, of non-zero length, and
of the optional byte length of `byteLen`; otherwise `false`.
