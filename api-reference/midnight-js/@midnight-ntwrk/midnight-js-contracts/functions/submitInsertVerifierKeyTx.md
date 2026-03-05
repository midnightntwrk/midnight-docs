[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitInsertVerifierKeyTx

# Function: submitInsertVerifierKeyTx()

> **submitInsertVerifierKeyTx**\<`C`\>(`providers`, `compiledContract`, `contractAddress`, `circuitId`, `newVk`): `Promise`\<`FinalizedTxData`\>

Constructs and submits a transaction that adds a new verifier key to the
blockchain for the given circuit ID at the given contract address.

## Transaction Execution Phases

Midnight transactions execute in two phases:
1. **Guaranteed phase**: If failure occurs, the transaction is NOT included in the blockchain
2. **Fallible phase**: If failure occurs, the transaction IS recorded on-chain as a partial success

## Failure Behavior

**Guaranteed Phase Failure:**
- Transaction is rejected and not included in the blockchain
- `InsertVerifierKeyTxFailedError` is thrown with transaction data
- Verifier key is NOT added to the contract
- No on-chain record of the failed transaction

**Fallible Phase Failure:**
- Transaction is recorded on-chain with non-`SucceedEntirely` status
- `InsertVerifierKeyTxFailedError` is thrown with transaction data
- Verifier key may be partially added but not usable
- Transaction appears in blockchain history as partial success

## Type Parameters

### C

`C` *extends* `Any`

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)

The providers to use to manage the transaction lifecycle.

### compiledContract

`CompiledContract`\<`C`, `any`\>

The compiled contract for which the maintenance authority
                        should be updated.

### contractAddress

`string`

The address of the contract containing the circuit for which
                       the verifier key should be inserted.

### circuitId

`ImpureCircuitId`\<`C`\>

The circuit for which the verifier key should be inserted.

### newVk

`VerifierKey`

The new verifier key for the circuit.

## Returns

`Promise`\<`FinalizedTxData`\>

A promise that resolves with the finalized transaction data, or rejects if
         an error occurs along the way.

## Throws

When transaction fails in either guaranteed or fallible phase.
        The error contains the finalized transaction data for debugging.

TODO: We'll likely want to modify ZKConfigProvider provider so that the verifier keys are
      automatically rotated in this function. This likely involves storing key versions
      along with keys in ZKConfigProvider. By default, artifacts for the latest version
      would be fetched to build transactions.
