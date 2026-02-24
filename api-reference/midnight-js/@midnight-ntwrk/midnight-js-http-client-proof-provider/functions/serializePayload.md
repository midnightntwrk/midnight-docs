[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-http-client-proof-provider](../README.md) / serializePayload

# Function: serializePayload()

> **serializePayload**\<`K`\>(`unprovenTx`, `zkConfig`?): `Promise`\<`ArrayBuffer`\>

Creates a serialized proving server payload from the given transaction and
ZK configuration.

## Type Parameters

### K

`K` *extends* `string`

## Parameters

### unprovenTx

`UnprovenTransaction`

The transaction being proven.

### zkConfig?

[`ZKConfig`](../../midnight-js-types/interfaces/ZKConfig.md)\<`K`\>

The ZK artifacts needed to prove the transaction. Undefined
                if a deployment transaction is being proven.

## Returns

`Promise`\<`ArrayBuffer`\>
