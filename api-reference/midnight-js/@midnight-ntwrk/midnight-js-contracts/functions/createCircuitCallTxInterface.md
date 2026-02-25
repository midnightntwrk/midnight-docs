[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCircuitCallTxInterface

# Function: createCircuitCallTxInterface()

> **createCircuitCallTxInterface**\<`C`\>(`providers`, `compiledContract`, `contractAddress`, `privateStateId`): [`CircuitCallTxInterface`](../type-aliases/CircuitCallTxInterface.md)\<`C`\>

Creates a circuit call transaction interface for a contract.

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

### privateStateId

The identifier of the state of the witnesses of the contract.

`string` | `undefined`

## Returns

[`CircuitCallTxInterface`](../type-aliases/CircuitCallTxInterface.md)\<`C`\>
