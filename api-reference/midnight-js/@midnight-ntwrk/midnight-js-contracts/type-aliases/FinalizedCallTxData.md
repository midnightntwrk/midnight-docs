[**Midnight.js API Reference v4.0.4**](../../../README.md)

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
