[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

Abstract base class for test environments.
Provides common functionality for managing test wallets and environments.

## Extended by

- [`LocalTestEnvironment`](LocalTestEnvironment.md)
- [`RemoteTestEnvironment`](RemoteTestEnvironment.md)

## Constructors

### Constructor

> **new TestEnvironment**(`logger`): `TestEnvironment`

Creates a new TestEnvironment instance.

#### Parameters

##### logger

`Logger`

Logger instance for recording operations

#### Returns

`TestEnvironment`

## Methods

### getEnvironmentConfiguration()

> `abstract` **getEnvironmentConfiguration**(): [`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

#### Returns

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

***

### getMidnightWalletProvider()

> **getMidnightWalletProvider**(): `Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)\>

Starts a single wallet instance.

#### Returns

`Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)\>

A promise that resolves to the started wallet

#### Throws

If no wallet could be started

***

### shutdown()

> `abstract` **shutdown**(`saveWalletState?`): `Promise`\<`void`\>

Shuts down the test environment and cleans up resources.

#### Parameters

##### saveWalletState?

`boolean`

Optional flag to save the wallet state before shutdown

#### Returns

`Promise`\<`void`\>

A promise that resolves when shutdown is complete

***

### start()

> `abstract` **start**(`maybeProofServerContainer?`): `Promise`\<[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)\>

Start the test environment.

#### Parameters

##### maybeProofServerContainer?

[`ProofServerContainer`](../interfaces/ProofServerContainer.md)

If defined, a container representing an already
                                 running proof server. If undefined, a proof server
                                 will be started automatically.

#### Returns

`Promise`\<[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)\>

A promise that resolves to the environment configuration

***

### startMidnightWalletProviders()

> `abstract` **startMidnightWalletProviders**(`amount?`, `seeds?`): `Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)[]\>

Starts multiple wallet instances.

#### Parameters

##### amount?

`number`

Optional number of wallet instances to start

##### seeds?

`string`[]

Optional array of seeds for the wallets

#### Returns

`Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)[]\>

A promise that resolves to an array of started wallets
