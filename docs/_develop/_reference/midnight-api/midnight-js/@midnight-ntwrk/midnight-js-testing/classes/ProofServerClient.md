[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / ProofServerClient

# Class: ProofServerClient

## Constructors

### Constructor

> **new ProofServerClient**(`proofServer`, `logger`): `ProofServerClient`

Creates an instance of ProofServerClient.

#### Parameters

##### proofServer

`string`

The URL of the proof server service.

##### logger

`Logger`

The logger instance for logging information.

#### Returns

`ProofServerClient`

## Properties

### proofServer

> `readonly` **proofServer**: `string`

## Methods

### health()

> **health**(): `Promise`\<`void` \| `AxiosResponse`\<`any`, `any`\>\>

Checks the health status of the indexer service.
Makes a GET request to the status endpoint of the indexer service.

#### Returns

`Promise`\<`void` \| `AxiosResponse`\<`any`, `any`\>\>

A promise that resolves to the response of the health check or logs an error if the request fails.

***

### proveTx()

> **proveTx**(`data`?, `config`?): `Promise`\<`void` \| `AxiosResponse`\<`any`, `any`\>\>

Proves a transaction by sending a POST request to the proof server.

#### Parameters

##### data?

`ArrayBuffer`

serialized transaction data

##### config?

`AxiosRequestConfig` = `...`

Axios request configuration

#### Returns

`Promise`\<`void` \| `AxiosResponse`\<`any`, `any`\>\>
