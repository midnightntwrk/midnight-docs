[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-http-client-proof-provider](../README.md) / DEFAULT\_CONFIG

# Variable: DEFAULT\_CONFIG

> `const` **DEFAULT\_CONFIG**: `object`

The default configuration for the proof server client.

## Type declaration

### timeout

> **timeout**: `number` = `300000`

The default timeout for prove requests.

### zkConfig

> **zkConfig**: `undefined` = `undefined`

The default ZK configuration to use. It is overwritten with a proper ZK
configuration only if a call transaction is being proven.
