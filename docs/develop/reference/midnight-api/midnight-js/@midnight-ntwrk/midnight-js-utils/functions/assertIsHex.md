[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / assertIsHex

# Function: assertIsHex()

> **assertIsHex**(`source`, `byteLen`?): `asserts source is string`

Asserts that a string represents a hex-encoded sequence of bytes.

## Parameters

### source

`string`

The source string.

### byteLen?

`number`

An optional number of bytes that `source` should represent. If not specified
then any number of bytes can be represented by `source`.

## Returns

`asserts source is string`

## Throws

`Error`
`byteLen` is \<= zero. Valid hex-strings will be required to have at least one byte.

## Throws

`TypeError`
`source` is not a hex-encoded string because it:
- is empty,
- contains invalid or incomplete characters, or
- does not represent `byteLen` bytes.
