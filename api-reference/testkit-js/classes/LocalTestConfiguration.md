[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

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

> `readonly` **faucet**: `string` \| `undefined`

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

### networkId

> `readonly` **networkId**: `string`

Network identifier

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`networkId`](../interfaces/EnvironmentConfiguration.md#networkid)

***

### node

> `readonly` **node**: `string`

URL of the blockchain node

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`node`](../interfaces/EnvironmentConfiguration.md#node)

***

### nodeWS

> `readonly` **nodeWS**: `string`

WebSocket URL for the blockchain node

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`nodeWS`](../interfaces/EnvironmentConfiguration.md#nodews)

***

### proofServer

> `readonly` **proofServer**: `string`

URL of the proof generation server

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`proofServer`](../interfaces/EnvironmentConfiguration.md#proofserver)

***

### walletNetworkId

> `readonly` **walletNetworkId**: `string`

Wallet Network identifier

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`walletNetworkId`](../interfaces/EnvironmentConfiguration.md#walletnetworkid)
