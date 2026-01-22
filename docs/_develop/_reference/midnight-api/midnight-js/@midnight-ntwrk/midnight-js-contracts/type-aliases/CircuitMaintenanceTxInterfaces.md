[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CircuitMaintenanceTxInterfaces

# Type Alias: CircuitMaintenanceTxInterfaces\<C\>

> **CircuitMaintenanceTxInterfaces**\<`C`\> = `{ [ICK in ImpureCircuitId<C>]: CircuitMaintenanceTxInterface }`

A set of maintenance transaction creation interfaces, one for each circuit defined in
a given contract, keyed by the circuit name.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
