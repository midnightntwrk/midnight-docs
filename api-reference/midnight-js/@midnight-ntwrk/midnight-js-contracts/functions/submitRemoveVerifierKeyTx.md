[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitRemoveVerifierKeyTx

# Function: submitRemoveVerifierKeyTx()

> **submitRemoveVerifierKeyTx**(`providers`, `contractAddress`, `circuitId`): `Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

Constructs and submits a transaction that removes the current verifier key stored
on the blockchain for the given circuit ID at the given contract address.

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)

The providers to use to manage the transaction lifecycle.

### contractAddress

`string`

The address of the contract containing the circuit for which
                       the verifier key should be removed.

### circuitId

`string`

The circuit for which the verifier key should be removed.

## Returns

`Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

A promise that resolves with the finalized transaction data, or rejects if
         an error occurs along the way.

TODO: We'll likely want to modify ZKConfigProvider provider so that the verifier keys are
      automatically rotated in this function. This likely involves storing key versions
      along with keys in ZKConfigProvider. By default, artifacts for the latest version
      would be fetched to build transactions.
