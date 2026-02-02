[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / TestnetTestEnvironment

# Class: TestnetTestEnvironment

Test environment configuration for the Midnight testnet network.
Provides URLs and endpoints for testnet services.

## Extends

- [`RemoteTestEnvironment`](RemoteTestEnvironment.md)

## Constructors

### Constructor

> **new TestnetTestEnvironment**(`logger`): `TestnetTestEnvironment`

Creates a new TestEnvironment instance.

#### Parameters

##### logger

`Logger`

Logger instance for recording operations

#### Returns

`TestnetTestEnvironment`

#### Inherited from

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`constructor`](RemoteTestEnvironment.md#constructor)

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

`RemoteTestEnvironment.getEnvironmentConfiguration`

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

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`getMidnightWalletProvider`](RemoteTestEnvironment.md#getmidnightwalletprovider)

***

### healthCheck()

> **healthCheck**(): `Promise`\<`void`\>

Performs a health check for the environment.
Checks the health of the node, indexer, and optionally the faucet services.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the health check is complete.

#### Inherited from

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`healthCheck`](RemoteTestEnvironment.md#healthcheck)

***

### shutdown()

> **shutdown**(`saveWalletState`?): `Promise`\<`void`\>

Shuts down the test environment by closing all walletProviders and stopping the proof server.

#### Parameters

##### saveWalletState?

`boolean`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`shutdown`](RemoteTestEnvironment.md#shutdown)

***

### start()

> **start**(`maybeProofServerContainer`?): `Promise`\<[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)\>

Starts the test environment by initializing the proof server and environment configuration.

#### Parameters

##### maybeProofServerContainer?

[`ProofServerContainer`](../interfaces/ProofServerContainer.md)

Optional proof server container to use instead of creating a new one

#### Returns

`Promise`\<[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)\>

The environment configuration

#### Inherited from

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`start`](RemoteTestEnvironment.md#start)

***

### startMidnightWalletProviders()

> **startMidnightWalletProviders**(`amount`, `seeds`): `Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)[]\>

Creates and starts the specified number of wallet providers.

#### Parameters

##### amount

`number` = `1`

##### seeds

`undefined` | `string`[]

#### Returns

`Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)[]\>

Array of started wallet providers

#### Inherited from

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`startMidnightWalletProviders`](RemoteTestEnvironment.md#startmidnightwalletproviders)
