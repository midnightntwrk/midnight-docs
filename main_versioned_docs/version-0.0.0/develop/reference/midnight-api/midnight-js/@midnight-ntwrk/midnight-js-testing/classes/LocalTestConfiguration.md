[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / LocalTestConfiguration

# Class: LocalTestConfiguration

Configuration class for local test environment implementing EnvironmentConfiguration

## Implements

- [`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

## Constructors

### Constructor

> **new LocalTestConfiguration**(`ports`): `LocalTestConfiguration`

Creates a new LocalTestConfiguration instance

#### Parameters

##### ports

[`ComponentPortsConfiguration`](../type-aliases/ComponentPortsConfiguration.md)

Object containing port numbers for each component

#### Returns

`LocalTestConfiguration`

## Properties

### faucet

> `readonly` **faucet**: `undefined` \| `string`

Optional URL for the faucet service to obtain test tokens

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`faucet`](../interfaces/EnvironmentConfiguration.md#faucet)

***

### indexer

> `readonly` **indexer**: `string`

URL of the indexer HTTP endpoint

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`indexer`](../interfaces/EnvironmentConfiguration.md#indexer)

***

### indexerWS

> `readonly` **indexerWS**: `string`

WebSocket URL for the indexer service

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`indexerWS`](../interfaces/EnvironmentConfiguration.md#indexerws)

***

### node

> `readonly` **node**: `string`

URL of the blockchain node

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`node`](../interfaces/EnvironmentConfiguration.md#node)

***

### proofServer

> `readonly` **proofServer**: `string`

URL of the proof generation server

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`proofServer`](../interfaces/EnvironmentConfiguration.md#proofserver)
