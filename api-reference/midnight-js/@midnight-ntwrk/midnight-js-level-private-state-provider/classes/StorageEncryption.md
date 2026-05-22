[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-level-private-state-provider](../README.md) / StorageEncryption

# Class: StorageEncryption

## Methods

### decrypt()

> **decrypt**(`encryptedData`): `Promise`\<`string`\>

#### Parameters

##### encryptedData

`string`

#### Returns

`Promise`\<`string`\>

***

### decryptWithPassword()

> **decryptWithPassword**(`encryptedData`, `password`): `Promise`\<`string`\>

#### Parameters

##### encryptedData

`string`

##### password

`string`

#### Returns

`Promise`\<`string`\>

***

### encrypt()

> **encrypt**(`data`): `Promise`\<`string`\>

#### Parameters

##### data

`string`

#### Returns

`Promise`\<`string`\>

***

### getSalt()

> **getSalt**(): `Buffer`

#### Returns

`Buffer`

***

### verifyPassword()

> **verifyPassword**(`password`): `Promise`\<`boolean`\>

#### Parameters

##### password

`string`

#### Returns

`Promise`\<`boolean`\>

***

### create()

> `static` **create**(`password`, `options?`): `Promise`\<`StorageEncryption`\>

#### Parameters

##### password

`string`

##### options?

[`StorageEncryptionOptions`](../interfaces/StorageEncryptionOptions.md)

#### Returns

`Promise`\<`StorageEncryption`\>

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
