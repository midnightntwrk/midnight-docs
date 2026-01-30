[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / DynamicProofServerContainer

# Class: DynamicProofServerContainer

A proof server container that is started and stopped dynamically by the test
suite on random port.

## Implements

## Implements

- [`ProofServerContainer`](../interfaces/ProofServerContainer.md)

## Properties

### dockerEnv

> **dockerEnv**: `StartedDockerComposeEnvironment`

The Docker Compose environment running the container

## Methods

### getMappedPort()

> **getMappedPort**(): `number`

Gets the mapped port number for the container.

#### Returns

`number`

The mapped port number

***

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

Stops the proof server container.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the container is stopped

#### Implementation of

[`ProofServerContainer`](../interfaces/ProofServerContainer.md).[`stop`](../interfaces/ProofServerContainer.md#stop)

***

### start()

> `static` **start**(`logger`, `maybeUID`?, `maybeNetworkId`?): `Promise`\<`DynamicProofServerContainer`\>

Starts a new proof server container.

#### Parameters

##### logger

`Logger`

Logger instance for recording operations

##### maybeUID?

`string`

Optional unique identifier for the container

##### maybeNetworkId?

`string`

Optional network ID for the container

#### Returns

`Promise`\<`DynamicProofServerContainer`\>

A promise that resolves to the new container instance

#### Static
