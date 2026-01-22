[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / inMemoryPrivateStateProvider

# Function: inMemoryPrivateStateProvider()

> **inMemoryPrivateStateProvider**\<`PSI`, `PS`\>(): [`PrivateStateProvider`](../../midnight-js-types/interfaces/PrivateStateProvider.md)\<`PSI`, `PS`\>

A simple in-memory implementation of private state provider. Makes it easy to capture and rewrite private state from deploy.

## Type Parameters

### PSI

`PSI` *extends* `string`

Type of the private state identifier.

### PS

`PS` *extends* `unknown`

Type of the private state.

## Returns

[`PrivateStateProvider`](../../midnight-js-types/interfaces/PrivateStateProvider.md)\<`PSI`, `PS`\>

An in-memory private state provider.
