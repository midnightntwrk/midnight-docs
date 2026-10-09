[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-indexer-public-data-provider](../README.md) / IndexerProviderConfigError

# Class: IndexerProviderConfigError

An error raised when the consumer passes a configuration that the indexer
provider does not support (e.g. an observable mode that cannot be served
by the indexer's query surface). Signals API misuse, not server-side
issues (separate semantic category from [IndexerDataError](IndexerDataError.md)).

## Extends

- [`IndexerError`](IndexerError.md)

## Constructors

### Constructor

> **new IndexerProviderConfigError**(`message`): `IndexerProviderConfigError`

#### Parameters

##### message

`string`

#### Returns

`IndexerProviderConfigError`

#### Overrides

[`IndexerError`](IndexerError.md).[`constructor`](IndexerError.md#constructor)
