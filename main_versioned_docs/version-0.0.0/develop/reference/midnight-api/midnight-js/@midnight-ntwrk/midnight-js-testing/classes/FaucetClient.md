[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / FaucetClient

# Class: FaucetClient

Client for interacting with the Midnight faucet service.
Provides functionality to request test tokens for wallet addresses.

## Constructors

### Constructor

> **new FaucetClient**(`faucetUrl`, `logger`): `FaucetClient`

Creates a new FaucetClient instance.

#### Parameters

##### faucetUrl

`string`

The URL of the faucet service endpoint

##### logger

`Logger`

Logger instance for recording operations

#### Returns

`FaucetClient`

## Properties

### faucetUrl

> `readonly` **faucetUrl**: `string`

## Methods

### health()

> **health**(): `Promise`\<`void` \| `AxiosResponse`\<`any`, `any`\>\>

Checks the health status of the faucet service.
Makes a GET request to the health endpoint of the faucet service.

#### Returns

`Promise`\<`void` \| `AxiosResponse`\<`any`, `any`\>\>

A promise that resolves to the response of the health check or logs an error if the request fails

***

### requestTokens()

> **requestTokens**(`walletAddress`): `Promise`\<`void`\>

Requests test tokens from the faucet for a specified wallet address.
Makes a POST request to the faucet service with the wallet address.

#### Parameters

##### walletAddress

`string`

The address to receive the test tokens

#### Returns

`Promise`\<`void`\>

A promise that resolves when the request is complete

#### Throws

Will log but not throw if the request fails
