[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / IncompleteCallTxPrivateStateConfig

# Class: IncompleteCallTxPrivateStateConfig

An error indicating that a private state ID was specified for a call transaction while a private
state provider was not. We want to let the user know so that they aren't under the impression the
private state of a contract was updated when it wasn't.

## Extends

- `Error`

## Constructors

### Constructor

> **new IncompleteCallTxPrivateStateConfig**(): `IncompleteCallTxPrivateStateConfig`

#### Returns

`IncompleteCallTxPrivateStateConfig`

#### Overrides

`Error.constructor`
