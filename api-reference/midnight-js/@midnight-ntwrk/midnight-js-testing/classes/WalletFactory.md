[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / WalletFactory

# Class: WalletFactory

## Constructors

### Constructor

> **new WalletFactory**(): `WalletFactory`

#### Returns

`WalletFactory`

## Methods

### build()

> `static` **build**(`env`, `walletLogLevel`?): `Promise`\<[`MidnightWallet`](../type-aliases/MidnightWallet.md)\>

Builds a wallet instance based on the provided environment configuration.

#### Parameters

##### env

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Configuration for the wallet environment

##### walletLogLevel?

`LogLevel` = `DEFAULT_WALLET_LOG_LEVEL`

Optional log level for wallet operations

#### Returns

`Promise`\<[`MidnightWallet`](../type-aliases/MidnightWallet.md)\>

A promise that resolves to the new wallet instance

***

### buildFromEnvContext()

> `static` **buildFromEnvContext**(`env`, `seed`?, `walletLogLevel`?): `Promise`\<[`MidnightWallet`](../type-aliases/MidnightWallet.md)\>

Builds a wallet instance based on the provided environment configuration and optional seed.

#### Parameters

##### env

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Configuration for the wallet environment

##### seed?

`string`

Optional seed for wallet generation. If not provided, a new random wallet will be created

##### walletLogLevel?

`LogLevel` = `DEFAULT_WALLET_LOG_LEVEL`

Optional log level for wallet operations

#### Returns

`Promise`\<[`MidnightWallet`](../type-aliases/MidnightWallet.md)\>

A promise that resolves to the new wallet instance

***

### buildFromSeed()

> `static` **buildFromSeed**(`env`, `seed`, `walletLogLevel`?): `Promise`\<[`MidnightWallet`](../type-aliases/MidnightWallet.md)\>

Builds a wallet instance from a seed based on the provided environment configuration.

#### Parameters

##### env

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Configuration for the wallet environment

##### seed

`string`

Seed for wallet generation

##### walletLogLevel?

`LogLevel` = `DEFAULT_WALLET_LOG_LEVEL`

Optional log level for wallet operations

#### Returns

`Promise`\<[`MidnightWallet`](../type-aliases/MidnightWallet.md)\>

A promise that resolves to the new wallet instance

***

### buildFromSeedAndTryToRestoreState()

> `static` **buildFromSeedAndTryToRestoreState**(`env`, `seed`, `directoryPath`?, `filename`?, `walletLogLevel`?): `Promise`\<[`MidnightWallet`](../type-aliases/MidnightWallet.md)\>

Builds a wallet from a seed and attempts to restore its state from a saved file if available.

#### Parameters

##### env

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Configuration containing indexer, node, and proof server details

##### seed

`string`

The seed to build the wallet from

##### directoryPath?

`string` = `DEFAULT_WALLET_STATE_DIRECTORY`

Directory path for wallet state file

##### filename?

`string` = `...`

Filename for wallet state file

##### walletLogLevel?

`LogLevel` = `DEFAULT_WALLET_LOG_LEVEL`

Log level for wallet operations

#### Returns

`Promise`\<[`MidnightWallet`](../type-aliases/MidnightWallet.md)\>

The built and initialized wallet

***

### restore()

> `static` **restore**(`env`, `serialized`, `seed`, `trimTxHistory`?, `walletLogLevel`?): `Promise`\<[`MidnightWallet`](../type-aliases/MidnightWallet.md)\>

Restores a wallet instance from a serialized state based on the provided environment configuration.

#### Parameters

##### env

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Configuration for the wallet environment

##### serialized

`string`

Serialized wallet state

##### seed

`string`

##### trimTxHistory?

`boolean` = `true`

Optional flag to trim the transaction history during restoration

##### walletLogLevel?

`LogLevel` = `DEFAULT_WALLET_LOG_LEVEL`

Optional log level for wallet operations

#### Returns

`Promise`\<[`MidnightWallet`](../type-aliases/MidnightWallet.md)\>

A promise that resolves to the restored wallet instance
