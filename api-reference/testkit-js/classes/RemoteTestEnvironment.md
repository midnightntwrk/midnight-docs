[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

Base class for remote test environments that connect to external network services.
Provides functionality for managing walletProviders and a proof server container.

## Extends

- [`TestEnvironment`](TestEnvironment.md)

## Extended by

- [`EnvVarRemoteTestEnvironment`](EnvVarRemoteTestEnvironment.md)
- [`QanetTestEnvironment`](QanetTestEnvironment.md)
- [`Testnet2TestEnvironment`](Testnet2TestEnvironment.md)

## Constructors

### Constructor

> **new RemoteTestEnvironment**(`logger`): `RemoteTestEnvironment`

Creates a new TestEnvironment instance.

#### Parameters

##### logger

`Logger`

Logger instance for recording operations

#### Returns

`RemoteTestEnvironment`

#### Inherited from

[`TestEnvironment`](TestEnvironment.md).[`constructor`](TestEnvironment.md#constructor)

## Methods

### getEnvironmentConfiguration()

> `abstract` **getEnvironmentConfiguration**(): [`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Abstract method that must be implemented by subclasses to provide environment configuration.

#### Returns

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Configuration object containing service URLs and endpoints

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

### healthCheck()

> **healthCheck**(): `Promise`\<`void`\>

Performs a health check for the environment.
Checks the health of the node, indexer, and optionally the faucet services.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the health check is complete.

***

### shutdown()

> **shutdown**(`saveWalletState?`): `Promise`\<`void`\>

Shuts down the test environment by closing all walletProviders and stopping the proof server.

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

Starts the test environment by initializing the proof server and environment configuration.

#### Parameters

##### maybeProofServerContainer?

[`ProofServerContainer`](../interfaces/ProofServerContainer.md)

Optional proof server container to use instead of creating a new one

#### Returns

`Promise`\<[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)\>

The environment configuration

#### Overrides

[`TestEnvironment`](TestEnvironment.md).[`start`](TestEnvironment.md#start)

***

### startMidnightWalletProviders()

> **startMidnightWalletProviders**(`amount?`, `seeds?`): `Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)[]\>

Creates and starts the specified number of wallet providers.

#### Parameters

##### amount?

`number` = `1`

##### seeds?

`string`[] | `undefined`

#### Returns

`Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)[]\>

Array of started wallet providers

#### Overrides

[`TestEnvironment`](TestEnvironment.md).[`startMidnightWalletProviders`](TestEnvironment.md#startmidnightwalletproviders)
