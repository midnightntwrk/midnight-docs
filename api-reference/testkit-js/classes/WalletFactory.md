[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

## Constructors

### Constructor

> **new WalletFactory**(): `WalletFactory`

#### Returns

`WalletFactory`

## Methods

### createDustWallet()

> `static` **createDustWallet**(`config`, `seed`, `dustOptions?`): `DustWalletAPI`

#### Parameters

##### config

`DefaultV1Configuration`

##### seed

`Uint8Array`

##### dustOptions?

[`DustWalletOptions`](../interfaces/DustWalletOptions.md) = `DEFAULT_DUST_OPTIONS`

#### Returns

`DustWalletAPI`

***

### createShieldedWallet()

> `static` **createShieldedWallet**(`config`, `seed`): `ShieldedWalletAPI`

#### Parameters

##### config

`DefaultV1Configuration`

##### seed

`Uint8Array`

#### Returns

`ShieldedWalletAPI`

***

### createUnshieldedWallet()

> `static` **createUnshieldedWallet**(`config`, `unshieldedKeystore`): `UnshieldedWalletAPI`

#### Parameters

##### config

`DefaultV1Configuration`

##### unshieldedKeystore

`UnshieldedKeystore`

#### Returns

`UnshieldedWalletAPI`

***

### createWalletFacade()

> `static` **createWalletFacade**(`config`, `shieldedWallet`, `unshieldedWallet`, `dustWallet`): `Promise`\<`WalletFacade`\>

#### Parameters

##### config

`DefaultConfiguration`

##### shieldedWallet

`ShieldedWalletAPI`

##### unshieldedWallet

`UnshieldedWalletAPI`

##### dustWallet

`DustWalletAPI`

#### Returns

`Promise`\<`WalletFacade`\>

***

### restoreShieldedWallet()

> `static` **restoreShieldedWallet**(`config`, `serializedState`): `Promise`\<`ShieldedWallet`\>

#### Parameters

##### config

`DefaultV1Configuration`

##### serializedState

`string`

#### Returns

`Promise`\<`ShieldedWallet`\>

***

### startWalletFacade()

> `static` **startWalletFacade**(`wallet`, `shieldedSeed`, `dustSeed`): `Promise`\<`WalletFacade`\>

#### Parameters

##### wallet

`WalletFacade`

##### shieldedSeed

`Uint8Array`

##### dustSeed

`Uint8Array`

#### Returns

`Promise`\<`WalletFacade`\>
