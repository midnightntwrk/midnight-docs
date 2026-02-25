[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-level-private-state-provider](../README.md) / StorageEncryption

# Class: StorageEncryption

## Constructors

### Constructor

> **new StorageEncryption**(`password`, `existingSalt?`): `StorageEncryption`

#### Parameters

##### password

`string`

##### existingSalt?

`Buffer`\<`ArrayBufferLike`\>

#### Returns

`StorageEncryption`

## Methods

### decrypt()

> **decrypt**(`encryptedData`): `string`

#### Parameters

##### encryptedData

`string`

#### Returns

`string`

***

### decryptWithPassword()

> **decryptWithPassword**(`encryptedData`, `password`): `string`

#### Parameters

##### encryptedData

`string`

##### password

`string`

#### Returns

`string`

***

### encrypt()

> **encrypt**(`data`): `string`

#### Parameters

##### data

`string`

#### Returns

`string`

***

### getSalt()

> **getSalt**(): `Buffer`

#### Returns

`Buffer`

***

### verifyPassword()

> **verifyPassword**(`password`): `boolean`

#### Parameters

##### password

`string`

#### Returns

`boolean`

***

### getVersion()

> `static` **getVersion**(`encryptedData`): `number`

#### Parameters

##### encryptedData

`string`

#### Returns

`number`

***

### isEncrypted()

> `static` **isEncrypted**(`data`): `boolean`

#### Parameters

##### data

`string`

#### Returns

`boolean`
