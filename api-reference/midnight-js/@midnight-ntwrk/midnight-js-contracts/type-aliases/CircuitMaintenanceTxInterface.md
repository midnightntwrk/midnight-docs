[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CircuitMaintenanceTxInterface

# Type Alias: CircuitMaintenanceTxInterface

> **CircuitMaintenanceTxInterface** = `object`

An interface for creating maintenance transactions for a specific circuit defined in a
given contract.

## Methods

### insertVerifierKey()

> **insertVerifierKey**(`newVk`): `Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

Constructs and submits a transaction that adds a new verifier key to the
blockchain for this circuit at this contract's address.

#### Parameters

##### newVk

[`VerifierKey`](../../midnight-js-types/type-aliases/VerifierKey.md)

The new verifier key to add for this circuit.

#### Returns

`Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

***

### removeVerifierKey()

> **removeVerifierKey**(): `Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

Constructs and submits a transaction that removes the current verifier key stored
on the blockchain for this circuit at this contract's address.

#### Returns

`Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>
