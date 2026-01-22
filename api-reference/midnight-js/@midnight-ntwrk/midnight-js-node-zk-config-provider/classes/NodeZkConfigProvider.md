[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-node-zk-config-provider](../README.md) / NodeZkConfigProvider

# Class: NodeZkConfigProvider\<K\>

Implementation of [ZKConfigProvider](../../midnight-js-types/classes/ZKConfigProvider.md) that reads the keys and zkIR from the local filesystem.

## Extends

- [`ZKConfigProvider`](../../midnight-js-types/classes/ZKConfigProvider.md)\<`K`\>

## Type Parameters

### K

`K` *extends* `string`

The type of the circuit ID used by the provider.

## Constructors

### Constructor

> **new NodeZkConfigProvider**\<`K`\>(`directory`): `NodeZkConfigProvider`\<`K`\>

#### Parameters

##### directory

`string`

The path to the base directory containing the key and ZKIR subdirectories.

#### Returns

`NodeZkConfigProvider`\<`K`\>

#### Overrides

[`ZKConfigProvider`](../../midnight-js-types/classes/ZKConfigProvider.md).[`constructor`](../../midnight-js-types/classes/ZKConfigProvider.md#constructor)

## Properties

### directory

> `readonly` **directory**: `string`

The path to the base directory containing the key and ZKIR subdirectories.

## Methods

### get()

> **get**(`circuitId`): `Promise`\<[`ZKConfig`](../../midnight-js-types/interfaces/ZKConfig.md)\<`K`\>\>

Retrieves all zero-knowledge artifacts produced by `compactc` for the given circuit.

#### Parameters

##### circuitId

`K`

The circuit ID of the artifacts to retrieve.

#### Returns

`Promise`\<[`ZKConfig`](../../midnight-js-types/interfaces/ZKConfig.md)\<`K`\>\>

#### Inherited from

[`ZKConfigProvider`](../../midnight-js-types/classes/ZKConfigProvider.md).[`get`](../../midnight-js-types/classes/ZKConfigProvider.md#get)

***

### getProverKey()

> **getProverKey**(`circuitId`): `Promise`\<[`ProverKey`](../../midnight-js-types/type-aliases/ProverKey.md)\>

[ZKConfigProvider.getProverKey](../../midnight-js-types/classes/ZKConfigProvider.md#getproverkey)

#### Parameters

##### circuitId

`K`

#### Returns

`Promise`\<[`ProverKey`](../../midnight-js-types/type-aliases/ProverKey.md)\>

#### Overrides

[`ZKConfigProvider`](../../midnight-js-types/classes/ZKConfigProvider.md).[`getProverKey`](../../midnight-js-types/classes/ZKConfigProvider.md#getproverkey)

***

### getVerifierKey()

> **getVerifierKey**(`circuitId`): `Promise`\<[`VerifierKey`](../../midnight-js-types/type-aliases/VerifierKey.md)\>

[ZKConfigProvider.getVerifierKey](../../midnight-js-types/classes/ZKConfigProvider.md#getverifierkey)

#### Parameters

##### circuitId

`K`

#### Returns

`Promise`\<[`VerifierKey`](../../midnight-js-types/type-aliases/VerifierKey.md)\>

#### Overrides

[`ZKConfigProvider`](../../midnight-js-types/classes/ZKConfigProvider.md).[`getVerifierKey`](../../midnight-js-types/classes/ZKConfigProvider.md#getverifierkey)

***

### getVerifierKeys()

> **getVerifierKeys**(`circuitIds`): `Promise`\<\[`K`, [`VerifierKey`](../../midnight-js-types/type-aliases/VerifierKey.md)\][]\>

Retrieves the verifier keys produced by `compactc` for the given circuits.

#### Parameters

##### circuitIds

`K`[]

The circuit IDs of the verifier keys to retrieve.

#### Returns

`Promise`\<\[`K`, [`VerifierKey`](../../midnight-js-types/type-aliases/VerifierKey.md)\][]\>

#### Inherited from

[`ZKConfigProvider`](../../midnight-js-types/classes/ZKConfigProvider.md).[`getVerifierKeys`](../../midnight-js-types/classes/ZKConfigProvider.md#getverifierkeys)

***

### getZKIR()

> **getZKIR**(`circuitId`): `Promise`\<[`ZKIR`](../../midnight-js-types/type-aliases/ZKIR.md)\>

[ZKConfigProvider.getZKIR](../../midnight-js-types/classes/ZKConfigProvider.md#getzkir)

#### Parameters

##### circuitId

`K`

#### Returns

`Promise`\<[`ZKIR`](../../midnight-js-types/type-aliases/ZKIR.md)\>

#### Overrides

[`ZKConfigProvider`](../../midnight-js-types/classes/ZKConfigProvider.md).[`getZKIR`](../../midnight-js-types/classes/ZKConfigProvider.md#getzkir)
