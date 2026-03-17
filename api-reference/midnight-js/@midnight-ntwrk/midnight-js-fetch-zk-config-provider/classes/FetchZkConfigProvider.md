[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-fetch-zk-config-provider](../README.md) / FetchZkConfigProvider

# Class: FetchZkConfigProvider\<K\>

Retrieves ZK artifacts from a remote source.

## Extends

- `ZKConfigProvider`\<`K`\>

## Type Parameters

### K

`K` *extends* `string`

## Constructors

### Constructor

> **new FetchZkConfigProvider**\<`K`\>(`baseURL`, `fetchFunc?`): `FetchZkConfigProvider`\<`K`\>

#### Parameters

##### baseURL

`string`

The endpoint to query for ZK artifacts.

##### fetchFunc?

\{(`input`, `init?`): `Promise`\<`Response`\>; (`input`, `init?`): `Promise`\<`Response`\>; \}

The function to use to execute queries.

#### Returns

`FetchZkConfigProvider`\<`K`\>

#### Overrides

`ZKConfigProvider<K>.constructor`

## Properties

### baseURL

> `readonly` **baseURL**: `string`

The endpoint to query for ZK artifacts.

## Methods

### asKeyMaterialProvider()

> **asKeyMaterialProvider**(): `KeyMaterialProvider`

#### Returns

`KeyMaterialProvider`

#### Inherited from

`ZKConfigProvider.asKeyMaterialProvider`

***

### get()

> **get**(`circuitId`): `Promise`\<`ZKConfig`\<`K`\>\>

Retrieves all zero-knowledge artifacts produced by `compact` compiler for the given circuit.

#### Parameters

##### circuitId

`K`

The circuit ID of the artifacts to retrieve.

#### Returns

`Promise`\<`ZKConfig`\<`K`\>\>

#### Inherited from

`ZKConfigProvider.get`

***

### getProverKey()

> **getProverKey**(`circuitId`): `Promise`\<`ProverKey`\>

Retrieves the prover key produced by `compact` compiler for the given circuit.

#### Parameters

##### circuitId

`K`

The circuit ID of the prover key to retrieve.

#### Returns

`Promise`\<`ProverKey`\>

#### Overrides

`ZKConfigProvider.getProverKey`

***

### getVerifierKey()

> **getVerifierKey**(`circuitId`): `Promise`\<`VerifierKey`\>

Retrieves the verifier key produced by `compact` compiler for the given circuit.

#### Parameters

##### circuitId

`K`

The circuit ID of the verifier key to retrieve.

#### Returns

`Promise`\<`VerifierKey`\>

#### Overrides

`ZKConfigProvider.getVerifierKey`

***

### getVerifierKeys()

> **getVerifierKeys**(`circuitIds`): `Promise`\<\[`K`, `VerifierKey`\][]\>

Retrieves the verifier keys produced by `compact` compiler for the given circuits.

#### Parameters

##### circuitIds

`K`[]

The circuit IDs of the verifier keys to retrieve.

#### Returns

`Promise`\<\[`K`, `VerifierKey`\][]\>

#### Inherited from

`ZKConfigProvider.getVerifierKeys`

***

### getZKIR()

> **getZKIR**(`circuitId`): `Promise`\<`ZKIR`\>

Retrieves the zero-knowledge intermediate representation produced by `compact` compiler for the given circuit.

#### Parameters

##### circuitId

`K`

The circuit ID of the ZKIR to retrieve.

#### Returns

`Promise`\<`ZKIR`\>

#### Overrides

`ZKConfigProvider.getZKIR`
