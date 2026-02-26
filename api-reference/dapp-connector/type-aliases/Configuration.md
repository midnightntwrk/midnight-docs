[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / Configuration

# Type Alias: Configuration

> **Configuration** = `object`

## Properties

### indexerUri

> **indexerUri**: `string`

Indexer URI

***

### indexerWsUri

> **indexerWsUri**: `string`

Indexer WebSocket URI

***

### networkId

> **networkId**: `string`

Network id connected to - present here mostly for completness and to allow dapp validate it is connected to the network it wishes to

***

### ~~proverServerUri?~~

> `optional` **proverServerUri**: `string`

Prover Server URI, likely to not be present, as different proving modalities emerge

#### Deprecated

Use `getProvingProvider` instead

***

### substrateNodeUri

> **substrateNodeUri**: `string`

Substrate URI
