[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / InvalidProtocolSchemeError

# Class: InvalidProtocolSchemeError

An error describing an invalid protocol scheme.

## Extends

- `Error`

## Constructors

### Constructor

> **new InvalidProtocolSchemeError**(`invalidScheme`, `allowableSchemes`): `InvalidProtocolSchemeError`

#### Parameters

##### invalidScheme

`string`

The invalid scheme.

##### allowableSchemes

`string`[]

The valid schemes that are allowed.

#### Returns

`InvalidProtocolSchemeError`

#### Overrides

`Error.constructor`

## Properties

### allowableSchemes

> `readonly` **allowableSchemes**: `string`[]

The valid schemes that are allowed.

***

### invalidScheme

> `readonly` **invalidScheme**: `string`

The invalid scheme.
