[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ProveTxConfig

# Interface: ProveTxConfig\<K\>

The configuration for the proof request to the proof provider.

## Type Parameters

### K

`K` *extends* `string`

## Properties

### timeout?

> `readonly` `optional` **timeout**: `number`

The timeout for the request.

***

### zkConfig?

> `readonly` `optional` **zkConfig**: [`ZKConfig`](ZKConfig.md)\<`K`\>

The zero-knowledge configuration for the circuit that was called in `tx`.
Undefined if `tx` is a deployment transaction.
