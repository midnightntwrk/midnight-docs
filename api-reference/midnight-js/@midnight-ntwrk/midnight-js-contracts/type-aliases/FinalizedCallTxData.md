[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FinalizedCallTxData

# Type Alias: FinalizedCallTxData\<C, PCK\>

> **FinalizedCallTxData**\<`C`, `PCK`\> = [`UnsubmittedCallTxData`](UnsubmittedCallTxData.md)\<`C`, `PCK`\> & `object`

Data for a submitted, finalized call transaction.

## Type Declaration

### public

> `readonly` **public**: `FinalizedTxData`

Public data relevant to this call transaction.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>

## Remarks

**Privacy-sensitive type.** Inherits [UnsubmittedCallTxData](UnsubmittedCallTxData.md)'s
`private` field, which transitively carries the `UnprovenTransaction`,
new shielded coins, ZK inputs/outputs, the private transcript outputs, and
the next private state. Treat as confidential when logging, serializing, or
transmitting: destructure only the non-sensitive fields (`public.txId`,
`public.blockHeight`, etc.) rather than spreading or stringifying the whole
object.

The framework deliberately exposes these references to support retry,
replay, debug, and redacted-telemetry workflows. Raw transmission to
observability platforms (log shippers, error reporters, analytics) is
not an intended use.
