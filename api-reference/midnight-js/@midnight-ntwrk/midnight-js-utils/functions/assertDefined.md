[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / assertDefined

# Function: assertDefined()

> **assertDefined**\<`A`\>(`value`, `message?`): `asserts value is NonNullable<A>`

Asserts that the given value is non-nullable.

## Type Parameters

### A

`A`

## Parameters

### value

`A` \| `null` \| `undefined`

The value to test for nullability.

### message?

`string`

The error message to use if an error is thrown.

## Returns

`asserts value is NonNullable<A>`

## Throws

Error If the value is nullable.
