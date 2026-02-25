[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / KeyMaterialProvider

# Type Alias: KeyMaterialProvider

> **KeyMaterialProvider** = `object`

Object resolving prover and verifier keys, as well as the ZKIR representation of the circuit.
It is almost identical to the one in Midnight.js's `ZKConfigProvider` (https://github.com/midnightntwrk/midnight-js/blob/main/packages/types/src/zk-config-provider.ts#L25)

It has separate methods for getting the ZKIR, prover key and verifier key to allow for caching of the keys and to avoid loading the prover key into memory when it is not needed.

## Methods

### getProverKey()

> **getProverKey**(`circuitKeyLocation`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Parameters

##### circuitKeyLocation

`string`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### getVerifierKey()

> **getVerifierKey**(`circuitKeyLocation`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Parameters

##### circuitKeyLocation

`string`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### getZKIR()

> **getZKIR**(`circuitKeyLocation`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Parameters

##### circuitKeyLocation

`string`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>
