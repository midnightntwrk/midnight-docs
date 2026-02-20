[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ContractMaintenanceTxInterface

# Interface: ContractMaintenanceTxInterface

Interface for creating maintenance transactions for a contract that was
deployed.

## Methods

### replaceAuthority()

> **replaceAuthority**(`newAuthority`): `Promise`\<`FinalizedTxData`\>

Constructs and submits a transaction that replaces the maintenance
authority stored on the blockchain for this contract.

#### Parameters

##### newAuthority

`string`

The new contract maintenance authority for this contract.

#### Returns

`Promise`\<`FinalizedTxData`\>
