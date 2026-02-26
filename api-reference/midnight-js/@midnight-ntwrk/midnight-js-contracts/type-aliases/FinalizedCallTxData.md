[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FinalizedCallTxData

# Type Alias: FinalizedCallTxData\<C, ICK\>

> **FinalizedCallTxData**\<`C`, `ICK`\> = [`UnsubmittedCallTxData`](UnsubmittedCallTxData.md)\<`C`, `ICK`\> & `object`

Data for a submitted, finalized call transaction.

## Type Declaration

### public

> `readonly` **public**: `FinalizedTxData`

Public data relevant to this call transaction.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### ICK

`ICK` *extends* `Contract.ImpureCircuitId`\<`C`\>
