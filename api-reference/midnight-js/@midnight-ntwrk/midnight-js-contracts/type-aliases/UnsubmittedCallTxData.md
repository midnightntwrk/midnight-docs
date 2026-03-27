[**Midnight.js API Reference v4.0.2**](../../../README.md)

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
