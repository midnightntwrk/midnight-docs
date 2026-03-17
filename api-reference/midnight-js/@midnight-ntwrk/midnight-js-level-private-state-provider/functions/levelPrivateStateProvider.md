[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-level-private-state-provider](../README.md) / levelPrivateStateProvider

# Function: levelPrivateStateProvider()

> **levelPrivateStateProvider**\<`PSI`, `PS`\>(`config`): `PrivateStateProvider`\<`PSI`, `PS`\> & `object`

Constructs an instance of PrivateStateProvider based on Level database.

⚠️ WARNING

RISK: This provider lacks a recovery mechanism.
Clearing browser cache or deleting local files permanently destroys the private state (contract state/keys).
For assets with real-world value, this may result in irreversible financial loss.
DO NOT use for production applications requiring data persistence.

## Type Parameters

### PSI

`PSI` *extends* `string`

### PS

`PS` = `any`

## Parameters

### config

`Partial`\<[`LevelPrivateStateProviderConfig`](../interfaces/LevelPrivateStateProviderConfig.md)\> & `Pick`\<[`LevelPrivateStateProviderConfig`](../interfaces/LevelPrivateStateProviderConfig.md), `"privateStoragePasswordProvider"` \| `"accountId"`\>

Database configuration options.

## Returns

`PrivateStateProvider`\<`PSI`, `PS`\> & `object`
