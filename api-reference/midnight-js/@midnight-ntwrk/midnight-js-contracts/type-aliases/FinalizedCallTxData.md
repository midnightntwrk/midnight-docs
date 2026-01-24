[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FinalizedCallTxData

# Type Alias: FinalizedCallTxData\<C, ICK\>

> **FinalizedCallTxData**\<`C`, `ICK`\> = [`UnsubmittedCallTxData`](UnsubmittedCallTxData.md)\<`C`, `ICK`\> & `object`

Data for a submitted, finalized call transaction.

## Type declaration

### public

> `readonly` **public**: [`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)

Public data relevant to this call transaction.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)

### ICK

`ICK` *extends* [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>
