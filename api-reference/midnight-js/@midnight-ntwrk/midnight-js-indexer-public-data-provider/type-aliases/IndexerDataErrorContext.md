[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-indexer-public-data-provider](../README.md) / IndexerDataErrorContext

# Type Alias: IndexerDataErrorContext

> **IndexerDataErrorContext** = \{ `kind`: `"unknown-status"`; `value`: `string`; \} \| \{ `contractAddress`: `string`; `kind`: `"missing-contract-action"`; \} \| \{ `actionIndex`: `number`; `contractAddress`: `string`; `identifiersLength`: `number`; `kind`: `"missing-identifier"`; \}

Discriminated context describing the specific way indexer-returned data
failed to satisfy the provider's expectations. The `kind` tag lets
consumers branch on the failure mode without parsing the error message.
