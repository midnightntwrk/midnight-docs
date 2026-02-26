[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / InvalidExportFormatError

# Class: InvalidExportFormatError

Error thrown when the export data format is invalid.

## Extends

- [`PrivateStateImportError`](PrivateStateImportError.md)

## Constructors

### Constructor

> **new InvalidExportFormatError**(`message?`): `InvalidExportFormatError`

#### Parameters

##### message?

`string` = `'Invalid export format'`

#### Returns

`InvalidExportFormatError`

#### Overrides

[`PrivateStateImportError`](PrivateStateImportError.md).[`constructor`](PrivateStateImportError.md#constructor)

## Properties

### cause?

> `readonly` `optional` **cause**: [`PrivateStateImportErrorCause`](../type-aliases/PrivateStateImportErrorCause.md)

#### Inherited from

[`PrivateStateImportError`](PrivateStateImportError.md).[`cause`](PrivateStateImportError.md#cause)
