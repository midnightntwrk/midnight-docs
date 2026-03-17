[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ContractProviders

# Type Alias: ContractProviders\<C, ICK, PS\>

> **ContractProviders**\<`C`, `ICK`, `PS`\> = `MidnightProviders`\<`ICK`, `PrivateStateId`, `PS`\>

Convenience type for representing the set of providers necessary to use
a given contract.

## Type Parameters

### C

`C` *extends* `Contract.Any` = `Contract.Any`

### ICK

`ICK` *extends* `Contract.ImpureCircuitId`\<`C`\> = `Contract.ImpureCircuitId`\<`C`\>

### PS

`PS` = `Contract.PrivateState`\<`C`\>
