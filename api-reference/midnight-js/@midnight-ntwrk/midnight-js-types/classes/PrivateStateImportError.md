[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / PrivateStateImportError

# Class: PrivateStateImportError

Base error thrown when importing private states fails.

## Extends

- `Error`

## Extended by

- [`ExportDecryptionError`](ExportDecryptionError.md)
- [`InvalidExportFormatError`](InvalidExportFormatError.md)
- [`ImportConflictError`](ImportConflictError.md)

## Constructors

### Constructor

> **new PrivateStateImportError**(`message`, `cause?`): `PrivateStateImportError`

#### Parameters

##### message

`string`

##### cause?

[`PrivateStateImportErrorCause`](../type-aliases/PrivateStateImportErrorCause.md)

#### Returns

`PrivateStateImportError`

#### Overrides

`Error.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: [`PrivateStateImportErrorCause`](../type-aliases/PrivateStateImportErrorCause.md)

#### Inherited from

`Error.cause`
