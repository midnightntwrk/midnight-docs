[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ImportConflictError

# Class: ImportConflictError

Error thrown when import conflicts with existing data and conflictStrategy is 'error'.

## Extends

- [`PrivateStateImportError`](PrivateStateImportError.md)

## Constructors

### Constructor

> **new ImportConflictError**(`conflictCount`, `entityName?`): `ImportConflictError`

#### Parameters

##### conflictCount

`number`

##### entityName?

`string` = `'private state'`

#### Returns

`ImportConflictError`

#### Overrides

[`PrivateStateImportError`](PrivateStateImportError.md).[`constructor`](PrivateStateImportError.md#constructor)

## Properties

### cause?

> `readonly` `optional` **cause**: [`PrivateStateImportErrorCause`](../type-aliases/PrivateStateImportErrorCause.md)

#### Inherited from

[`PrivateStateImportError`](PrivateStateImportError.md).[`cause`](PrivateStateImportError.md#cause)

***

### conflictCount

> `readonly` **conflictCount**: `number`
