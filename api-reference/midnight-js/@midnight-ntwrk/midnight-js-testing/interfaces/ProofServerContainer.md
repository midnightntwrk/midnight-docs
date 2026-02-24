[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / ProofServerContainer

# Interface: ProofServerContainer

Interface representing a proof server container that can be started and stopped.

## Methods

### getUrl()

> **getUrl**(): `string`

Gets the URL where the proof server can be accessed.

#### Returns

`string`

The URL of the proof server

***

### stop()

> **stop**(): `Promise`\<`void`\>

Stops the proof server container.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the container is stopped
