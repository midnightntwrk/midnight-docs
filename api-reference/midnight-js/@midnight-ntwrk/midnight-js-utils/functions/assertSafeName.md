[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / assertSafeName

# Function: assertSafeName()

> **assertSafeName**(`name`, `label`): `void`

Asserts that `name` is safe to use as a single path segment or URL path
component. Rejects traversal payloads (`.`, `..`, separators), URL-encoded
characters, null bytes, whitespace, empty strings, and names longer than
[MAX\_SAFE\_NAME\_LENGTH](../variables/MAX_SAFE_NAME_LENGTH.md).

## Parameters

### name

`string`

The value to validate.

### label

`string`

Human-readable name of the parameter (for error messages).

## Returns

`void`

## Throws

Error if `name` fails validation.
