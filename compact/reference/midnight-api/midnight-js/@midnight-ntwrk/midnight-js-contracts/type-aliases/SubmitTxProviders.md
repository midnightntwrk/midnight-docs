[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / SubmitTxProviders

# Type Alias: SubmitTxProviders\<C, ICK\>

> **SubmitTxProviders**\<`C`, `ICK`\> = `Omit`\<[`ContractProviders`](ContractProviders.md)\<`C`, `ICK`\>, `"privateStateProvider"`\>

Providers required to submit an unproven deployment transaction. Since [submitTx](../functions/submitTx.md) doesn't
manipulate private state, the private state provider can be omitted.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)

### ICK

`ICK` *extends* [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>
