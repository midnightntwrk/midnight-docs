[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / PrivateState

# Type Alias: PrivateState\<C\>

> **PrivateState**\<`C`\> = `C` *extends* [`Contract`](../interfaces/Contract.md)\<infer PS\> ? `PS` : `never`

Extracts the private state of a contract.

## Type Parameters

### C

`C` *extends* [`Contract`](../interfaces/Contract.md)

The contract for which we would like the private state.
