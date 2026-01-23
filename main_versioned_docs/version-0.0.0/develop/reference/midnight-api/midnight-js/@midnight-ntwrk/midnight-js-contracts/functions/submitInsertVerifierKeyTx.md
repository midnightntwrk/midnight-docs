[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitInsertVerifierKeyTx

# Function: submitInsertVerifierKeyTx()

> **submitInsertVerifierKeyTx**(`providers`, `contractAddress`, `circuitId`, `newVk`): `Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

Constructs and submits a transaction that adds a new verifier key to the
blockchain for the given circuit ID at the given contract address.

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)

The providers to use to manage the transaction lifecycle.

### contractAddress

`string`

The address of the contract containing the circuit for which
                       the verifier key should be inserted.

### circuitId

`string`

The circuit for which the verifier key should be inserted.

### newVk

[`VerifierKey`](../../midnight-js-types/type-aliases/VerifierKey.md)

The new verifier key for the circuit.

## Returns

`Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

A promise that resolves with the finalized transaction data, or rejects if
         an error occurs along the way.

TODO: We'll likely want to modify ZKConfigProvider provider so that the verifier keys are
      automatically rotated in this function. This likely involves storing key versions
      along with keys in ZKConfigProvider. By default, artifacts for the latest version
      would be fetched to build transactions.
