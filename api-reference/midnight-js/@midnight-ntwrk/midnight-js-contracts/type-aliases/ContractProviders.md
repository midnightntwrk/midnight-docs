[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ContractProviders

# Type Alias: ContractProviders\<C, ICK, PS\>

> **ContractProviders**\<`C`, `ICK`, `PS`\> = [`MidnightProviders`](../../midnight-js-types/interfaces/MidnightProviders.md)\<`ICK`, [`PrivateStateId`](../../midnight-js-types/type-aliases/PrivateStateId.md), `PS`\>

Convenience type for representing the set of providers necessary to use
a given contract.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md) = [`Contract`](../../midnight-js-types/interfaces/Contract.md)

### ICK

`ICK` *extends* [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\> = [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>

### PS

`PS` = [`PrivateState`](../../midnight-js-types/type-aliases/PrivateState.md)\<`C`\>
