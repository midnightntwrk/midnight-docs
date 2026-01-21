[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ContractMaintenanceTxInterface

# Type Alias: ContractMaintenanceTxInterface

> **ContractMaintenanceTxInterface** = `object`

Interface for creating maintenance transactions for a contract that was
deployed.

## Methods

### replaceAuthority()

> **replaceAuthority**(`newAuthority`): `Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

Constructs and submits a transaction that replaces the maintenance
authority stored on the blockchain for this contract.

#### Parameters

##### newAuthority

`string`

The new contract maintenance authority for this contract.

#### Returns

`Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>
