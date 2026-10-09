[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-indexer-public-data-provider](../README.md) / correlateDeployTxId

# Function: correlateDeployTxId()

> **correlateDeployTxId**(`contractAddress`, `contractActions`, `identifiers`): `string`

**`Internal`**

Correlates a contract action at `contractAddress` with the transaction's
identifier at the same positional index. Throws [IndexerDataError](../classes/IndexerDataError.md)
when the deploy lacks an action for the address, when the corresponding
identifier slot is missing, or when the identifier is not a non-empty
string. All indicate that the indexer's contract-action / identifier
rows are out of sync.

 Exported for unit testing the correlation in isolation.
Production callers should go through `PublicDataProvider.watchForDeployTxData`.

## Parameters

### contractAddress

`string`

### contractActions

readonly `object`[]

### identifiers

readonly `string`[]

## Returns

`string`
