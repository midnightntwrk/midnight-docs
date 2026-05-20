[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / assertSemVer

# Function: assertSemVer()

> **assertSemVer**(`version`, `label`): `void`

Asserts that `version` is a valid SemVer-style version string of the shape
`MAJOR.MINOR.PATCH` with an optional pre-release suffix
(`-[A-Za-z0-9._-]+`). Build metadata (`+...`) is intentionally not
supported because compactc releases do not use it.

## Parameters

### version

`string`

The version string to validate.

### label

`string`

Human-readable name of the parameter (for error messages).

## Returns

`void`

## Throws

Error if `version` is not SemVer-shaped.
