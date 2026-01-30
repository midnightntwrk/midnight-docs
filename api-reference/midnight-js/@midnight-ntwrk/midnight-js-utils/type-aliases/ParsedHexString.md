[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / ParsedHexString

# Type Alias: ParsedHexString

> **ParsedHexString** = `object`

The result of parsing a string as a hex-encoded string.

## Properties

### byteChars

> `readonly` **byteChars**: `string`

The captured sequence of _whole_ bytes found in the source string.

***

### hasPrefix

> `readonly` **hasPrefix**: `boolean`

A flag indicating if the hex-string has a `'0x'` prefix.

***

### incompleteChars

> `readonly` **incompleteChars**: `string`

The remaining characters of incomplete bytes and/or the non hexadecimal characters found
in the source string.
