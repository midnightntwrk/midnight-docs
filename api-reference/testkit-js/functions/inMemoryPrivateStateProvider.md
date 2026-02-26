[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

> **inMemoryPrivateStateProvider**\<`PSI`, `PS`\>(): `PrivateStateProvider`\<`PSI`, `PS`\>

A simple in-memory implementation of private state provider. Makes it easy to capture and rewrite private state from deploy.

Note: Unlike `levelPrivateStateProvider`, this provider has no storage password configured.
Therefore, export/import operations always require an explicit password in the options.

## Type Parameters

### PSI

`PSI` *extends* `string`

Type of the private state identifier.

### PS

`PS` *extends* `unknown`

Type of the private state.

## Returns

`PrivateStateProvider`\<`PSI`, `PS`\>

An in-memory private state provider.
