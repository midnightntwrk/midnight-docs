[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-level-private-state-provider](../README.md) / levelPrivateStateProvider

# Function: levelPrivateStateProvider()

> **levelPrivateStateProvider**\<`PSI`, `PS`\>(`partialConfig`): [`PrivateStateProvider`](../../midnight-js-types/interfaces/PrivateStateProvider.md)\<`PSI`, `PS`\>

Constructs an instance of [PrivateStateProvider](../../midnight-js-types/interfaces/PrivateStateProvider.md) based on Level database.

## Type Parameters

### PSI

`PSI` *extends* `string`

### PS

`PS` = `any`

## Parameters

### partialConfig

`Partial`\<[`LevelPrivateStateProviderConfig`](../interfaces/LevelPrivateStateProviderConfig.md)\> = `{}`

Database configuration options.

## Returns

[`PrivateStateProvider`](../../midnight-js-types/interfaces/PrivateStateProvider.md)\<`PSI`, `PS`\>
