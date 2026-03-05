[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createContractMaintenanceTxInterface

# Function: createContractMaintenanceTxInterface()

> **createContractMaintenanceTxInterface**\<`C`\>(`providers`, `compiledContract`, `contractAddress`): [`ContractMaintenanceTxInterface`](../interfaces/ContractMaintenanceTxInterface.md)

Creates a [ContractMaintenanceTxInterface](../interfaces/ContractMaintenanceTxInterface.md).

## Type Parameters

### C

`C` *extends* `Any`

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)

The providers to use to build transactions.

### compiledContract

`CompiledContract`\<`C`, `any`\>

### contractAddress

`string`

The ledger address of the contract.

## Returns

[`ContractMaintenanceTxInterface`](../interfaces/ContractMaintenanceTxInterface.md)
