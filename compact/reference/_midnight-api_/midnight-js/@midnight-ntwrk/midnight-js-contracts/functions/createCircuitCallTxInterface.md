[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCircuitCallTxInterface

# Function: createCircuitCallTxInterface()

> **createCircuitCallTxInterface**\<`C`\>(`providers`, `contract`, `contractAddress`, `privateStateId`): [`CircuitCallTxInterface`](../type-aliases/CircuitCallTxInterface.md)\<`C`\>

Creates a circuit call transaction interface for a contract.

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

### privateStateId

The identifier of the state of the witnesses of the contract.

`undefined` | `string`

## Returns

[`CircuitCallTxInterface`](../type-aliases/CircuitCallTxInterface.md)\<`C`\>
