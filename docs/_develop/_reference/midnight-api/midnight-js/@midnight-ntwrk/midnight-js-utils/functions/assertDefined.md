[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / assertDefined

# Function: assertDefined()

> **assertDefined**\<`A`\>(`value`, `message`?): `asserts value is NonNullable<A>`

Asserts that the given value is non-nullable.

## Type Parameters

### A

`A`

## Parameters

### value

The value to test for nullability.

`undefined` | `null` | `A`

### message?

`string`

The error message to use if an error is thrown.

## Returns

`asserts value is NonNullable<A>`

## Throws

Error If the value is nullable.
