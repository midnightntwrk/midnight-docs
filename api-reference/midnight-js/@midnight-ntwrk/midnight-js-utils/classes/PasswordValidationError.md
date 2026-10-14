[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / PasswordValidationError

# Class: PasswordValidationError

Thrown when a password does not satisfy the strength policy applied to
private storage and export/import operations.

## Extends

- `Error`

## Constructors

### Constructor

> **new PasswordValidationError**(`message`, `reason`): `PasswordValidationError`

#### Parameters

##### message

`string`

##### reason

[`PasswordValidationFailure`](../type-aliases/PasswordValidationFailure.md)

#### Returns

`PasswordValidationError`

#### Overrides

`Error.constructor`

## Properties

### reason

> `readonly` **reason**: [`PasswordValidationFailure`](../type-aliases/PasswordValidationFailure.md)
