[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCircuitMaintenanceTxInterface

# Function: createCircuitMaintenanceTxInterface()

> **createCircuitMaintenanceTxInterface**\<`C`, `ICK`\>(`providers`, `circuitId`, `compiledContract`, `contractAddress`): [`CircuitMaintenanceTxInterface`](../type-aliases/CircuitMaintenanceTxInterface.md)

Creates a [CircuitMaintenanceTxInterface](../type-aliases/CircuitMaintenanceTxInterface.md).

## Type Parameters

### C

`C` *extends* `Any`

### ICK

`ICK` *extends* `string`

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, `ICK`\>

The providers to use to create and submit transactions.

### circuitId

`ICK`

The circuit ID the interface is for.

### compiledContract

`CompiledContract`\<`C`, `any`\>

### contractAddress

`string`

The address of the deployed contract for which this
                       interface is being created.

## Returns

[`CircuitMaintenanceTxInterface`](../type-aliases/CircuitMaintenanceTxInterface.md)
