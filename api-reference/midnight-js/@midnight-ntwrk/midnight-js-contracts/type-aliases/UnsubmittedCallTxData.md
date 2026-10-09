[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnsubmittedCallTxData

# Type Alias: UnsubmittedCallTxData\<C, PCK\>

> **UnsubmittedCallTxData**\<`C`, `PCK`\> = [`CallResult`](CallResult.md)\<`C`, `PCK`\> & `object`

Data for an unsubmitted call transaction.

## Type Declaration

### private

> `readonly` **private**: [`UnsubmittedTxData`](UnsubmittedTxData.md)

Private data relevant to this call transaction.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>

## Remarks

**Privacy-sensitive type.** Intersects [CallResult](CallResult.md) (whose `private`
field exposes ZK inputs/outputs, the private transcript outputs, and the
next private state) with an additional [UnsubmittedTxData](UnsubmittedTxData.md) under
`private` (carrying the `UnprovenTransaction` and new shielded
coins). Treat as confidential when logging, serializing, or transmitting:
destructure specific non-sensitive fields rather than spreading or
stringifying the whole object.
