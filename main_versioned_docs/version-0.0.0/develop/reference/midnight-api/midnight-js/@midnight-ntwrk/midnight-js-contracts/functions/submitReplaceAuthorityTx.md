[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitReplaceAuthorityTx

# Function: submitReplaceAuthorityTx()

> **submitReplaceAuthorityTx**(`providers`, `contractAddress`): (`newAuthority`) => `Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

Constructs and submits a transaction that replaces the maintenance
authority stored on the blockchain for this contract. After the transaction is
finalized, the current signing key stored in the given private state provider
is overwritten with the given new authority key.

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)

The providers to use to manage the transaction lifecycle.

### contractAddress

`string`

The address of the contract for which the maintenance
                       authority should be updated.

TODO: There are at least three options we should support in the future:
      1. Replace authority and maintain key (current).
      2. Replace authority and do not maintain key.
      3. Add additional authorities and maintain original key.

## Returns

> (`newAuthority`): `Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

### Parameters

#### newAuthority

`string`

The signing key of the new contract maintenance authority.

### Returns

`Promise`\<[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)\>

A promise that resolves with the finalized transaction data, or rejects if
         an error occurs along the way.
