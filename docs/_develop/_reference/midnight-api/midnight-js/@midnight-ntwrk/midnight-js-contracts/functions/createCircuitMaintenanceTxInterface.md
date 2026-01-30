[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCircuitMaintenanceTxInterface

# Function: createCircuitMaintenanceTxInterface()

> **createCircuitMaintenanceTxInterface**\<`C`, `ICK`\>(`providers`, `circuitId`, `contractAddress`): [`CircuitMaintenanceTxInterface`](../type-aliases/CircuitMaintenanceTxInterface.md)

Creates a [CircuitMaintenanceTxInterface](../type-aliases/CircuitMaintenanceTxInterface.md).

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

### ICK

`ICK` *extends* `string`

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, `ICK`\>

The providers to use to create and submit transactions.

### circuitId

`ICK`

The circuit ID the interface is for.

### contractAddress

`string`

The address of the deployed contract for which this
                       interface is being created.

## Returns

[`CircuitMaintenanceTxInterface`](../type-aliases/CircuitMaintenanceTxInterface.md)
