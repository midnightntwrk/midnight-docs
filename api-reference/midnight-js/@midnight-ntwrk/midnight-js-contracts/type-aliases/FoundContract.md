[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FoundContract

# Type Alias: FoundContract\<C\>

> **FoundContract**\<`C`\> = `object`

Base type for a deployed contract that has been found on the blockchain.

## Type Parameters

### C

`C` *extends* `Contract.Any`

## Properties

### callTx

> `readonly` **callTx**: [`CircuitCallTxInterface`](CircuitCallTxInterface.md)\<`C`\>

Interface for creating call transactions for a contract.

***

### circuitMaintenanceTx

> `readonly` **circuitMaintenanceTx**: [`CircuitMaintenanceTxInterfaces`](CircuitMaintenanceTxInterfaces.md)\<`C`\>

An interface for creating maintenance transactions for circuits defined in the
contract that was deployed.

***

### contractMaintenanceTx

> `readonly` **contractMaintenanceTx**: [`ContractMaintenanceTxInterface`](../interfaces/ContractMaintenanceTxInterface.md)

Interface for creating maintenance transactions for the contract that was
deployed.

***

### deployTxData

> `readonly` **deployTxData**: [`FinalizedDeployTxDataBase`](FinalizedDeployTxDataBase.md)\<`C`\>

Data for the finalized deploy transaction corresponding to this contract.
