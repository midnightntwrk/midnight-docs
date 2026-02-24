[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / parseHex

# Function: parseHex()

> **parseHex**(`source`): [`ParsedHexString`](../type-aliases/ParsedHexString.md)

Parses a string as a hex-encoded string.

## Parameters

### source

`string`

The source string to parse.

## Returns

[`ParsedHexString`](../type-aliases/ParsedHexString.md)

A [ParsedHexString](../type-aliases/ParsedHexString.md) describing the parsed elements of `source`.

## Examples

```ts
parseHex('Hello') =>
  {
    hasPrefix: false,
    incompleteChars: 'Hello'
  }
```

```ts
parseHex('ab12e') =>
  {
    hasPrefix: false,
    byteChars: 'ab12'
    incompleteChars: 'e'
  }
```

```ts
parseHex('0xab12') =>
  {
    hasPrefix: true,
    byteChars: 'ab12'
    incompleteChars: ''
  }
```
