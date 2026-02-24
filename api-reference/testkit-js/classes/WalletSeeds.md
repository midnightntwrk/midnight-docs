[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

## Properties

### dust

> `readonly` **dust**: `Uint8Array`

***

### masterSeed

> `readonly` **masterSeed**: `string`

***

### shielded

> `readonly` **shielded**: `Uint8Array`

***

### unshielded

> `readonly` **unshielded**: `Uint8Array`

## Methods

### fromMasterSeed()

> `static` **fromMasterSeed**(`seed`): `WalletSeeds`

#### Parameters

##### seed

`string`

#### Returns

`WalletSeeds`

***

### fromMnemonic()

> `static` **fromMnemonic**(`mnemonic`): `WalletSeeds`

#### Parameters

##### mnemonic

`string`

#### Returns

`WalletSeeds`

***

### generateRandom()

> `static` **generateRandom**(): `WalletSeeds`

#### Returns

`WalletSeeds`

***

### testWallet()

> `static` **testWallet**(): `WalletSeeds`

#### Returns

`WalletSeeds`
