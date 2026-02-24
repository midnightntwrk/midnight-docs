[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnprovenCallTxProvidersWithPrivateState

# Type Alias: UnprovenCallTxProvidersWithPrivateState\<C\>

> **UnprovenCallTxProvidersWithPrivateState**\<`C`\> = [`UnprovenCallTxProvidersBase`](UnprovenCallTxProvidersBase.md) & `Pick`\<[`ContractProviders`](ContractProviders.md)\<`C`\>, `"privateStateProvider"`\>

Same providers as [UnprovenCallTxProvidersBase](UnprovenCallTxProvidersBase.md) with an additional private
state provider to store the new private state resulting from the circuit call -
only used when creating a call transaction for a contract with a private state.

## Type Parameters

### C

`C` *extends* `Contract.Any`
