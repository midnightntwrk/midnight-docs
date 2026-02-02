[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ContractTypeError

# Class: ContractTypeError

The error that is thrown when there is a contract type mismatch between a given contract type,
and the initial state that is deployed at a given contract address.

## Remarks

This error is typically thrown during calls to [findDeployedContract](../functions/findDeployedContract.md) where the supplied contract
address represents a different type of contract to the contract type given.

## Extends

- `TypeError`

## Constructors

### Constructor

> **new ContractTypeError**(`contractState`, `circuitIds`): `ContractTypeError`

Initializes a new ContractTypeError.

#### Parameters

##### contractState

`ContractState`

The initial deployed contract state.

##### circuitIds

`string`[]

The circuits that are undefined, or have a verifier key mismatch with the
                  key present in `contractState`.

#### Returns

`ContractTypeError`

#### Overrides

`TypeError.constructor`

## Properties

### circuitIds

> `readonly` **circuitIds**: `string`[]

The circuits that are undefined, or have a verifier key mismatch with the
                  key present in `contractState`.

***

### contractState

> `readonly` **contractState**: `ContractState`

The initial deployed contract state.
