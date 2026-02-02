[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / IndexerClient

# Class: IndexerClient

## Constructors

### Constructor

> **new IndexerClient**(`indexerUrl`, `logger`): `IndexerClient`

Creates an instance of IndexerClient.

#### Parameters

##### indexerUrl

`string`

The URL of the indexer service.

##### logger

`Logger`

The logger instance for logging information.

#### Returns

`IndexerClient`

## Properties

### indexerUrl

> `readonly` **indexerUrl**: `string`

## Methods

### health()

> **health**(): `Promise`\<`void` \| `AxiosResponse`\<`any`, `any`\>\>

Checks the health status of the indexer service.
Makes a GET request to the status endpoint of the indexer service.

#### Returns

`Promise`\<`void` \| `AxiosResponse`\<`any`, `any`\>\>

A promise that resolves to the response of the health check or logs an error if the request fails.
