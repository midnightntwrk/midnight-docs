[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnsubmittedCallTxData

# Type Alias: UnsubmittedCallTxData\<C, ICK\>

> **UnsubmittedCallTxData**\<`C`, `ICK`\> = [`CallResult`](CallResult.md)\<`C`, `ICK`\> & `object`

Data for an unsubmitted call transaction.

## Type Declaration

### private

> `readonly` **private**: [`UnsubmittedTxData`](UnsubmittedTxData.md)

Private data relevant to this call transaction.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### ICK

`ICK` *extends* `Contract.ImpureCircuitId`\<`C`\>
