[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ProofProvider

# Interface: ProofProvider\<K\>

Interface for a proof server running in a trusted environment.

## Type Parameters

### K

`K` *extends* `string`

The type of the circuit ID used by the provider.

## Methods

### proveTx()

> **proveTx**(`tx`, `proveTxConfig`?): `Promise`\<[`UnbalancedTransaction`](../type-aliases/UnbalancedTransaction.md)\>

Creates call proofs for an unproven transaction. The resulting transaction is unbalanced and
must be balanced using the [WalletProvider](WalletProvider.md) interface.

#### Parameters

##### tx

`UnprovenTransaction`

The transaction to be proved. Prior to version 1.0.0, unproven transactions always only
          contain a single contract call.

##### proveTxConfig?

[`ProveTxConfig`](ProveTxConfig.md)\<`K`\>

The configuration for the proof request to the proof provider. Empty in case
                     a deploy transaction is being proved with no user-defined timeout.

#### Returns

`Promise`\<[`UnbalancedTransaction`](../type-aliases/UnbalancedTransaction.md)\>
