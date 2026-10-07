[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-indexer-public-data-provider](../README.md) / IndexerSubscriptionDataError

# Class: IndexerSubscriptionDataError

An error raised when an indexer subscription payload is missing a field
the provider relies on. Carries the missing field name for diagnostics.

## Extends

- [`IndexerError`](IndexerError.md)

## Constructors

### Constructor

> **new IndexerSubscriptionDataError**(`missingField`): `IndexerSubscriptionDataError`

#### Parameters

##### missingField

[`IndexerSubscriptionField`](../type-aliases/IndexerSubscriptionField.md)

#### Returns

`IndexerSubscriptionDataError`

#### Overrides

[`IndexerError`](IndexerError.md).[`constructor`](IndexerError.md#constructor)

## Properties

### missingField

> `readonly` **missingField**: [`IndexerSubscriptionField`](../type-aliases/IndexerSubscriptionField.md)
