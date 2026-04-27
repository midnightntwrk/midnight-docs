[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ScopedTransactionOptions

# Type Alias: ScopedTransactionOptions

> **ScopedTransactionOptions** = `object`

Options for use when creating scoped transactions.

## Properties

### additionalCoinEncPublicKeyMappings?

> `readonly` `optional` **additionalCoinEncPublicKeyMappings?**: `ReadonlyMap`\<`CoinPublicKey`, `EncPublicKey`\>

An optional mapping of CoinPublicKey to EncPublicKey that can be used to resolve encryption
keys for coins created during circuit execution.

***

### scopeName?

> `readonly` `optional` **scopeName?**: `string`

An optional name for the transaction scope.
