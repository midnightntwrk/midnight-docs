[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FinalizedDeployTxDataBase

# Type Alias: FinalizedDeployTxDataBase\<C\>

> **FinalizedDeployTxDataBase**\<`C`\> = [`UnsubmittedDeployTxDataBase`](UnsubmittedDeployTxDataBase.md)\<`C`\> & `object`

Data for a finalized deploy transaction submitted in this process.

## Type Declaration

### public

> `readonly` **public**: `FinalizedTxData`

The data of this transaction that is visible on the blockchain.

## Type Parameters

### C

`C` *extends* `Contract.Any`

## Remarks

**Privacy-sensitive type.** Inherits [UnsubmittedDeployTxDataBase](UnsubmittedDeployTxDataBase.md)'s
`private` field (signing key, initial private state). Treat as confidential
when logging, serializing, or transmitting: destructure only the
non-sensitive fields (`public.txId`, `public.blockHeight`, etc.) rather
than spreading or stringifying the whole object.
