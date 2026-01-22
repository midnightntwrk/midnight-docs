[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-indexer-public-data-provider](../README.md) / IndexerFormattedError

# Class: IndexerFormattedError

An error describing the causes of error that occurred during server-side execution of
a query against the Indexer.

## Extends

- `Error`

## Constructors

### Constructor

> **new IndexerFormattedError**(`cause`): `IndexerFormattedError`

#### Parameters

##### cause

readonly `GraphQLFormattedError`[]

An array of GraphQL errors that occurred during the server-side execution.

#### Returns

`IndexerFormattedError`

#### Overrides

`Error.constructor`

## Properties

### cause

> `readonly` **cause**: readonly `GraphQLFormattedError`[]

An array of GraphQL errors that occurred during the server-side execution.

#### Inherited from

`Error.cause`
