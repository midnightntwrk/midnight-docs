[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / WalletSaveStateProvider

# Class: WalletSaveStateProvider

Provider class for saving and loading wallet state to/from compressed files

## Constructors

### Constructor

> **new WalletSaveStateProvider**(`logger`, `seed`, `directoryPath`?, `filename`?): `WalletSaveStateProvider`

Creates a new WalletSaveStateProvider instance

#### Parameters

##### logger

`Logger`

Logger instance for recording operations

##### seed

`string`

##### directoryPath?

`string` = `DEFAULT_WALLET_STATE_DIRECTORY`

Directory path for wallet state files

##### filename?

`string` = `...`

Filename for the wallet state file

#### Returns

`WalletSaveStateProvider`

## Properties

### directoryPath

> **directoryPath**: `string`

Absolute path to the directory containing wallet state files

***

### filePath

> **filePath**: `string`

Full path including filename for the wallet state file

***

### logger

> **logger**: `Logger`

Logger instance for recording operations

## Methods

### load()

> **load**(): `Promise`\<`string`\>

Loads and decompresses the wallet state from a file

#### Returns

`Promise`\<`string`\>

A promise that resolves with the decompressed wallet state as a string

#### Throws

If there is an error reading or decompressing the file

***

### save()

> **save**(`wallet`): `Promise`\<`void`\>

Saves the wallet state to a compressed file

#### Parameters

##### wallet

`Wallet`

The wallet instance to save state from

#### Returns

`Promise`\<`void`\>

A promise that resolves when the save is complete
