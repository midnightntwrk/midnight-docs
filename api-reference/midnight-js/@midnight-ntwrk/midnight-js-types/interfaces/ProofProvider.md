[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ProofProvider

# Interface: ProofProvider

Interface for a proof server running in a trusted environment.

## Type Param

The type of the circuit ID used by the provider.

## Methods

### proveTx()

> **proveTx**(`unprovenTx`, `proveTxConfig?`): `Promise`\<[`UnboundTransaction`](../type-aliases/UnboundTransaction.md)\>

Creates call proofs for an unproven transaction. The resulting transaction is unbalanced and
must be balanced using the [WalletProvider](WalletProvider.md) interface.
          contain a single contract call.

#### Parameters

##### unprovenTx

`UnprovenTransaction`

##### proveTxConfig?

[`ProveTxConfig`](ProveTxConfig.md)

The configuration for the proof request to the proof provider. Empty in case
                     a deploy transaction is being proved with no user-defined timeout.

#### Returns

`Promise`\<[`UnboundTransaction`](../type-aliases/UnboundTransaction.md)\>
