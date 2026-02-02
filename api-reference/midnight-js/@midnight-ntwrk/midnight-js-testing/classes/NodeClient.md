[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / NodeClient

# Class: NodeClient

Client for interacting with a Midnight node's JSON-RPC API

## Constructors

### Constructor

> **new NodeClient**(`nodeURL`, `logger`): `NodeClient`

Creates a new NodeClient instance

#### Parameters

##### nodeURL

`string`

URL of the Midnight node

##### logger

`Logger`

Logger instance for recording operations

#### Returns

`NodeClient`

## Properties

### nodeURL

> `readonly` **nodeURL**: `string`

## Methods

### contractState()

> **contractState**(`contractAddress`): `Promise`\<`null` \| `ContractState`\>

Fetches the state of a contract

#### Parameters

##### contractAddress

`string`

Address of the contract

#### Returns

`Promise`\<`null` \| `ContractState`\>

Contract state or null if not found

***

### health()

> **health**(): `Promise`\<`void` \| `AxiosResponse`\<`any`, `any`\>\>

Checks the health status of the node.
Makes a GET request to the health endpoint of the node.

#### Returns

`Promise`\<`void` \| `AxiosResponse`\<`any`, `any`\>\>

A promise that resolves to the response of the health check or logs an error if the request fails.

***

### ledgerState()

> **ledgerState**(`blockHash`): `Promise`\<`LedgerState`\>

Fetches the ledger state at a given block

#### Parameters

##### blockHash

`string`

Hash of the block

#### Returns

`Promise`\<`LedgerState`\>

Ledger state

***

### ledgerStateBlob()

> **ledgerStateBlob**(`blockHash`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Fetches the raw ledger state blob at a given block

#### Parameters

##### blockHash

`string`

Hash of the block

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Raw ledger state data

#### Throws

If no ledger state is found

***

### ledgerVersion()

> **ledgerVersion**(`blockHash`): `Promise`\<`string`\>

Fetches the ledger version at a given block

#### Parameters

##### blockHash

`string`

Hash of the block

#### Returns

`Promise`\<`string`\>

Ledger version

#### Throws

If no ledger version is found
