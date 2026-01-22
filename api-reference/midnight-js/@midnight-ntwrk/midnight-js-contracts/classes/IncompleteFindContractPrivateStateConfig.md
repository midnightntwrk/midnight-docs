[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / IncompleteFindContractPrivateStateConfig

# Class: IncompleteFindContractPrivateStateConfig

An error indicating that an initial private state was specified for a contract find while a
private state ID was not. We can't store the initial private state if we don't have a private state ID,
and we need to let the user know that.

## Extends

- `Error`

## Constructors

### Constructor

> **new IncompleteFindContractPrivateStateConfig**(): `IncompleteFindContractPrivateStateConfig`

#### Returns

`IncompleteFindContractPrivateStateConfig`

#### Overrides

`Error.constructor`
