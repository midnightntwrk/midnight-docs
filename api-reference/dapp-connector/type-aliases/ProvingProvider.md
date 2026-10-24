[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / ProvingProvider

# Type Alias: ProvingProvider

> **ProvingProvider** = `object`

Object abstracting the proving functionality
It is compatible with Ledger's ProvingProvider (https://github.com/midnightntwrk/midnight-ledger/blob/ledger-8.1.3/ledger-wasm/ledger-v8.template.d.ts#L1149)

## Methods

### check()

> **check**(`serializedPreimage`, `keyLocation`): `Promise`\<(`bigint` \| `undefined`)[]\>

#### Parameters

##### serializedPreimage

`Uint8Array`

##### keyLocation

`string`

#### Returns

`Promise`\<(`bigint` \| `undefined`)[]\>

***

### prove()

> **prove**(`serializedPreimage`, `keyLocation`, `overwriteBindingInput?`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Parameters

##### serializedPreimage

`Uint8Array`

##### keyLocation

`string`

##### overwriteBindingInput?

`bigint`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>
