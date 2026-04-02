[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / SubmitTxProviders

# Type Alias: SubmitTxProviders\<C, PCK\>

> **SubmitTxProviders**\<`C`, `PCK`\> = `Omit`\<[`ContractProviders`](ContractProviders.md)\<`C`, `PCK`\>, `"privateStateProvider"`\>

Providers required to submit an unproven deployment transaction. Since [submitTx](../functions/submitTx.md) doesn't
manipulate private state, the private state provider can be omitted.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>
