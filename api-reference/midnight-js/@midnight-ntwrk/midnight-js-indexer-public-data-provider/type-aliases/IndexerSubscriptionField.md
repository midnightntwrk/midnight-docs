[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-indexer-public-data-provider](../README.md) / IndexerSubscriptionField

# Type Alias: IndexerSubscriptionField

> **IndexerSubscriptionField** = `"blocks"` \| `"contractActions"`

Subscription payload fields the indexer provider depends on.
Narrowing this to a literal union prevents typos at throw sites and
documents the exhaustive set of fields the provider currently reads.
