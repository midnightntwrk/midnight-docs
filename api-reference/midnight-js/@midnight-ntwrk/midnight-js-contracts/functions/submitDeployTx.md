[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitDeployTx

# Function: submitDeployTx()

Creates and submits a deploy transaction for the given contract.

## Transaction Execution Phases

Midnight transactions execute in two phases:
1. **Guaranteed phase**: If failure occurs, the transaction is NOT included in the blockchain
2. **Fallible phase**: If failure occurs, the transaction IS recorded on-chain as a partial success

## Failure Behavior

**Guaranteed Phase Failure:**
- Transaction is rejected and not included in the blockchain
- `DeployTxFailedError` is thrown with transaction data
- Private state (if `privateStateId` provided) is NOT stored
- Contract signing key is NOT stored in private state provider
- Contract is NOT deployed

**Fallible Phase Failure:**
- Transaction is recorded on-chain with non-`SucceedEntirely` status
- `DeployTxFailedError` is thrown with transaction data
- Private state (if `privateStateId` provided) is NOT stored
- Contract signing key is NOT stored in private state provider
- Transaction appears in blockchain history as partial success
- Contract may be partially deployed but not functional

## Param

The providers used to manage the deploy lifecycle.

## Param

Configuration.

## Throws

When transaction fails in either guaranteed or fallible phase.
        The error contains the finalized transaction data for debugging.

## Call Signature

> **submitDeployTx**\<`C`\>(`providers`, `options`): `Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, `ImpureCircuitId`\<`C`\>, `unknown`\>

#### options

[`DeployTxOptionsBase`](../type-aliases/DeployTxOptionsBase.md)\<`C`\>

### Returns

`Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>

## Call Signature

> **submitDeployTx**\<`C`\>(`providers`, `options`): `Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`DeployTxOptionsWithPrivateStateId`](../type-aliases/DeployTxOptionsWithPrivateStateId.md)\<`C`\>

### Returns

`Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>
