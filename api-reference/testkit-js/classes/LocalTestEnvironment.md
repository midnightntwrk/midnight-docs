[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

Test environment for local development using Docker containers
Manages containers for node, indexer and proof server components

## Extends

- [`TestEnvironment`](TestEnvironment.md)

## Constructors

### Constructor

> **new LocalTestEnvironment**(`logger`): `LocalTestEnvironment`

Creates a new LocalTestEnvironment instance

#### Parameters

##### logger

`Logger`

Logger instance for recording operations

#### Returns

`LocalTestEnvironment`

#### Overrides

[`TestEnvironment`](TestEnvironment.md).[`constructor`](TestEnvironment.md#constructor)

## Properties

### dockerEnv

> **dockerEnv**: `StartedDockerComposeEnvironment`

***

### genesisMintWalletSeed

> `readonly` **genesisMintWalletSeed**: `string`[]

***

### MAX\_NUMBER\_OF\_WALLETS

> `readonly` `static` **MAX\_NUMBER\_OF\_WALLETS**: `4` = `4`

## Methods

### getEnvironmentConfiguration()

> **getEnvironmentConfiguration**(): [`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Returns the configuration for the testnet environment services.

#### Returns

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Object containing URLs for testnet services:
- indexer: GraphQL API endpoint for the indexer
- indexerWS: WebSocket endpoint for the indexer
- node: RPC endpoint for the blockchain node
- faucet: API endpoint for requesting test tokens
- proofServer: URL for the proof generation server

#### Overrides

[`TestEnvironment`](TestEnvironment.md).[`getEnvironmentConfiguration`](TestEnvironment.md#getenvironmentconfiguration)

***

### getMidnightWalletProvider()

> **getMidnightWalletProvider**(): `Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)\>

Starts a single wallet instance.

#### Returns

`Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)\>

A promise that resolves to the started wallet

#### Throws

If no wallet could be started

#### Inherited from

[`TestEnvironment`](TestEnvironment.md).[`getMidnightWalletProvider`](TestEnvironment.md#getmidnightwalletprovider)

***

### shutdown()

> **shutdown**(`saveWalletState?`): `Promise`\<`void`\>

Shuts down the test environment, closing walletProviders and stopping containers

#### Parameters

##### saveWalletState?

`boolean`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`TestEnvironment`](TestEnvironment.md).[`shutdown`](TestEnvironment.md#shutdown)

***

### start()

> **start**(`maybeProofServerContainer?`): `Promise`\<[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)\>

Starts the test environment by creating and configuring Docker containers

#### Parameters

##### maybeProofServerContainer?

[`ProofServerContainer`](../interfaces/ProofServerContainer.md)

Optional proof server container

#### Returns

`Promise`\<[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)\>

The environment configuration

#### Throws

If trying to inject proof server container when starting new environment

#### Overrides

[`TestEnvironment`](TestEnvironment.md).[`start`](TestEnvironment.md#start)

***

### startMidnightWalletProviders()

> **startMidnightWalletProviders**(`amount?`, `seeds?`): `Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)[]\>

Creates and starts the specified number of wallet providers

#### Parameters

##### amount?

`number` = `1`

##### seeds?

`string`[] | `undefined`

#### Returns

`Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)[]\>

A promise that resolves to an array of started wallets

#### Throws

If requested amount exceeds maximum supported walletProviders

#### Overrides

[`TestEnvironment`](TestEnvironment.md).[`startMidnightWalletProviders`](TestEnvironment.md#startmidnightwalletproviders)

***

### startWithInjectedEnvironment()

> **startWithInjectedEnvironment**(`dockerEnv`, `ports`): `Promise`\<[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)\>

Instead of starting the test environment by building the docker containers
from the default configuration files in this package, start the test environment
by passing an existing StartedDockerComposeEnvironment along with the
ports for the containers in the environment.

#### Parameters

##### dockerEnv

`StartedDockerComposeEnvironment`

A started docker compose environment

##### ports

[`ComponentPortsConfiguration`](../type-aliases/ComponentPortsConfiguration.md)

The ports of the containers in the given environment

#### Returns

`Promise`\<[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)\>

The environment configuration
