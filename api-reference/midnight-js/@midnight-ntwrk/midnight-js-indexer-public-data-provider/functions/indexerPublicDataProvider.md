[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-indexer-public-data-provider](../README.md) / indexerPublicDataProvider

# Function: indexerPublicDataProvider()

> **indexerPublicDataProvider**(`queryURL`, `subscriptionURL`, `webSocketImpl`): [`PublicDataProvider`](../../midnight-js-types/interfaces/PublicDataProvider.md)

Constructs a [PublicDataProvider](../../midnight-js-types/interfaces/PublicDataProvider.md) based on an ApolloClient.

## Parameters

### queryURL

`string`

The URL of a GraphQL server query endpoint.

### subscriptionURL

`string`

The URL of a GraphQL server subscription (websocket) endpoint.

### webSocketImpl

*typeof* `WebSocket` = `ws.WebSocket`

An optional websocket implementation for the Apollo client to use.

TODO: Re-examine caching when 'ContractCall' and 'ContractDeploy' have transaction identifiers included.

## Returns

[`PublicDataProvider`](../../midnight-js-types/interfaces/PublicDataProvider.md)
