[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCircuitMaintenanceTxInterfaces

# Function: createCircuitMaintenanceTxInterfaces()

> **createCircuitMaintenanceTxInterfaces**\<`C`\>(`providers`, `compiledContract`, `contractAddress`): [`CircuitMaintenanceTxInterfaces`](../type-aliases/CircuitMaintenanceTxInterfaces.md)\<`C`\>

Creates a [CircuitMaintenanceTxInterfaces](../type-aliases/CircuitMaintenanceTxInterfaces.md).

## Type Parameters

### C

`C` *extends* `Any`

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

The providers to use to build transactions.

### compiledContract

`CompiledContract`\<`C`, `any`\>

The contract to use to execute circuits.

### contractAddress

`string`

The ledger address of the contract.

## Returns

[`CircuitMaintenanceTxInterfaces`](../type-aliases/CircuitMaintenanceTxInterfaces.md)\<`C`\>
