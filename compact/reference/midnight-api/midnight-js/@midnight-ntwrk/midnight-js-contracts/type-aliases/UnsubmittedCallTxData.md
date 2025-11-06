[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnsubmittedCallTxData

# Type Alias: UnsubmittedCallTxData\<C, ICK\>

> **UnsubmittedCallTxData**\<`C`, `ICK`\> = [`CallResult`](CallResult.md)\<`C`, `ICK`\> & `object`

Data for an unsubmitted call transaction.

## Type declaration

### private

> `readonly` **private**: [`UnsubmittedTxData`](UnsubmittedTxData.md)

Private data relevant to this call transaction.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)

### ICK

`ICK` *extends* [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>
