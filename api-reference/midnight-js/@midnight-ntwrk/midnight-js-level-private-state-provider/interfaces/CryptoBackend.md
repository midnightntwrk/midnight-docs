[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-level-private-state-provider](../README.md) / CryptoBackend

# Interface: CryptoBackend

## Methods

### aesGcmDecrypt()

> **aesGcmDecrypt**(`key`, `iv`, `ciphertext`, `authTag`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Parameters

##### key

`Uint8Array`

##### iv

`Uint8Array`

##### ciphertext

`Uint8Array`

##### authTag

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### aesGcmEncrypt()

> **aesGcmEncrypt**(`key`, `iv`, `plaintext`): `Promise`\<\{ `authTag`: `Uint8Array`; `ciphertext`: `Uint8Array`; \}\>

#### Parameters

##### key

`Uint8Array`

##### iv

`Uint8Array`

##### plaintext

`Uint8Array`

#### Returns

`Promise`\<\{ `authTag`: `Uint8Array`; `ciphertext`: `Uint8Array`; \}\>

***

### pbkdf2()

> **pbkdf2**(`password`, `salt`, `iterations`, `keyLength`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Parameters

##### password

`Uint8Array`

##### salt

`Uint8Array`

##### iterations

`number`

##### keyLength

`number`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### randomBytes()

> **randomBytes**(`length`): `Uint8Array`

#### Parameters

##### length

`number`

#### Returns

`Uint8Array`

***

### sha256()

> **sha256**(`data`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Parameters

##### data

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>
