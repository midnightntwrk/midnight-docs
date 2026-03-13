[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ExportDecryptionError

# Class: ExportDecryptionError

Error thrown when decryption of export data fails.
This could be due to wrong password, corrupted data, or tampered content.
The specific cause is intentionally not disclosed to prevent oracle attacks.

## Extends

- [`PrivateStateImportError`](PrivateStateImportError.md)

## Constructors

### Constructor

> **new ExportDecryptionError**(): `ExportDecryptionError`

#### Returns

`ExportDecryptionError`

#### Overrides

[`PrivateStateImportError`](PrivateStateImportError.md).[`constructor`](PrivateStateImportError.md#constructor)

## Properties

### cause?

> `readonly` `optional` **cause**: [`PrivateStateImportErrorCause`](../type-aliases/PrivateStateImportErrorCause.md)

#### Inherited from

[`PrivateStateImportError`](PrivateStateImportError.md).[`cause`](PrivateStateImportError.md#cause)
