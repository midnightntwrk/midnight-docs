[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-dapp-connector-proof-provider](../README.md) / dappConnectorProvingProvider

# Function: dappConnectorProvingProvider()

> **dappConnectorProvingProvider**\<`K`\>(`api`, `zkConfigProvider`): `Promise`\<`ProvingProvider`\>

Obtains a ProvingProvider from the DApp Connector wallet.

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

## Returns

`Promise`\<`ProvingProvider`\>

A ProvingProvider backed by the wallet.

## Remarks

Extracts key material from the given `zkConfigProvider` and passes it to the wallet's
`getProvingProvider` method. Use this when you need direct, circuit-level access to the
wallet's proving capabilities without cost model integration.
