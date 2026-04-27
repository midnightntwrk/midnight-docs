[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-dapp-connector-proof-provider](../README.md) / dappConnectorProofProvider

# Function: dappConnectorProofProvider()

> **dappConnectorProofProvider**\<`K`\>(`api`, `zkConfigProvider`, `costModel`): `Promise`\<[`ProofProvider`](#)\>

Creates a [ProofProvider](#) that delegates proving to a DApp Connector wallet.

## Type Parameters

### K

`K` *extends* `string`

Union of circuit identifier strings defined by the contract.

## Parameters

### api

[`DAppConnectorProvingAPI`](../type-aliases/DAppConnectorProvingAPI.md)

DApp Connector wallet API exposing `getProvingProvider`.

### zkConfigProvider

[`ZKConfigProvider`](#)\<`K`\>

Provider that supplies ZK configuration artifacts and key material.

### costModel

`CostModel`

Cost model applied during transaction proving.

## Returns

`Promise`\<[`ProofProvider`](#)\>

A [ProofProvider](#) whose `proveTx` method delegates to the wallet.

## Remarks

Combines a wallet-backed [dappConnectorProvingProvider](dappConnectorProvingProvider.md) with the given `costModel`
to produce a transaction-level proof provider. The wallet's proving provider is obtained
once during initialization and reused for all subsequent `proveTx` calls.
