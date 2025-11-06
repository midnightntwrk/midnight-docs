[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCircuitMaintenanceTxInterfaces

# Function: createCircuitMaintenanceTxInterfaces()

> **createCircuitMaintenanceTxInterfaces**\<`C`\>(`providers`, `contract`, `contractAddress`): [`CircuitMaintenanceTxInterfaces`](../type-aliases/CircuitMaintenanceTxInterfaces.md)\<`C`\>

Creates a [CircuitMaintenanceTxInterfaces](../type-aliases/CircuitMaintenanceTxInterfaces.md).

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

The providers to use to build transactions.

### contract

`C`

The contract to use to execute circuits.

### contractAddress

`string`

The ledger address of the contract.

## Returns

[`CircuitMaintenanceTxInterfaces`](../type-aliases/CircuitMaintenanceTxInterfaces.md)\<`C`\>
