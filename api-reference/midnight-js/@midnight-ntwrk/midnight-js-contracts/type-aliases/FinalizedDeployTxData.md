[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FinalizedDeployTxData

# Type Alias: FinalizedDeployTxData\<C\>

> **FinalizedDeployTxData**\<`C`\> = [`UnsubmittedDeployTxData`](UnsubmittedDeployTxData.md)\<`C`\> & `object`

Data for a finalized deploy transaction submitted in this process.

## Type Declaration

### public

> `readonly` **public**: `FinalizedTxData`

The data of this transaction that is visible on the blockchain.

## Type Parameters

### C

`C` *extends* `Contract.Any`

## Remarks

**Privacy-sensitive type.** Inherits [UnsubmittedDeployTxData](UnsubmittedDeployTxData.md)'s
`private` field, which transitively carries the `UnprovenTransaction`,
`newCoins`, signing key, initial private state, and `initialZswapState`.
Treat as confidential when logging, serializing, or transmitting:
destructure only the non-sensitive fields (`public.txId`,
`public.blockHeight`, etc.) rather than spreading or stringifying the whole
object.

The framework deliberately exposes these references to support retry,
replay, debug, and redacted-telemetry workflows. Raw transmission to
observability platforms (log shippers, error reporters, analytics) is
not an intended use.
