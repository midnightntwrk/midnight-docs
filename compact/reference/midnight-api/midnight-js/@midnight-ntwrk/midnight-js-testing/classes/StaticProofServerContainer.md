[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / StaticProofServerContainer

# Class: StaticProofServerContainer

A proof server that is currently running on a specific port.
Used for connecting to an existing proof server instance.

## Implements

## Implements

- [`ProofServerContainer`](../interfaces/ProofServerContainer.md)

## Constructors

### Constructor

> **new StaticProofServerContainer**(`port`): `StaticProofServerContainer`

Creates a new StaticProofServerContainer instance.

#### Parameters

##### port

`number` = `6300`

The port number where the proof server is running (default: 6300)

#### Returns

`StaticProofServerContainer`

## Properties

### port

> **port**: `number`

The port number where the proof server is running

## Methods

### getUrl()

> **getUrl**(): `string`

Gets the URL where the proof server can be accessed.

#### Returns

`string`

The URL of the proof server

#### Implementation of

[`ProofServerContainer`](../interfaces/ProofServerContainer.md).[`getUrl`](../interfaces/ProofServerContainer.md#geturl)

***

### stop()

> **stop**(): `Promise`\<`void`\>

No-op stop method since this represents an external proof server.

#### Returns

`Promise`\<`void`\>

A resolved promise

#### Implementation of

[`ProofServerContainer`](../interfaces/ProofServerContainer.md).[`stop`](../interfaces/ProofServerContainer.md#stop)
