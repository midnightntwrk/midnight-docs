[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-indexer-public-data-provider](../README.md) / IndexerFormattedError

# Class: IndexerFormattedError

Raised when a GraphQL response includes one or more `GraphQLFormattedError`
entries. Aggregates all server-side errors into a single numbered message
and exposes the original array via [errors](#errors).

The field is named `errors` (not `cause`) because the standard ES2022
`Error.cause` slot is contractually a single underlying error, not a
peer collection. Reusing `cause` would confuse Node's `util.inspect`
causal chain, Sentry, and other structured loggers.

Transport-level and other Apollo failures are reported via [IndexerQueryError](IndexerQueryError.md).

## Extends

- [`IndexerError`](IndexerError.md)

## Constructors

### Constructor

> **new IndexerFormattedError**(`errors`): `IndexerFormattedError`

#### Parameters

##### errors

readonly `GraphQLFormattedError`[]

The GraphQL errors reported by the server.

#### Returns

`IndexerFormattedError`

#### Overrides

[`IndexerError`](IndexerError.md).[`constructor`](IndexerError.md#constructor)

## Properties

### errors

> `readonly` **errors**: readonly `GraphQLFormattedError`[]

The GraphQL errors reported by the server.
