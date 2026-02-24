[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / deployContract

# Function: deployContract()

Creates and submits a contract deployment transaction. This function is the entry point for the transaction
construction workflow and is used to create a [DeployedContract](../type-aliases/DeployedContract.md) instance.

## Param

The providers used to manage the transaction lifecycle.

## Param

Configuration.

## Throws

DeployTxFailedError If the transaction is submitted successfully but produces an error
                            when executed by the node.

## Call Signature

> **deployContract**\<`C`\>(`providers`, `options`): `Promise`\<[`DeployedContract`](../type-aliases/DeployedContract.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, `ImpureCircuitId`\<`C`\>, `unknown`\>

#### options

[`DeployContractOptionsBase`](../type-aliases/DeployContractOptionsBase.md)\<`C`\>

### Returns

`Promise`\<[`DeployedContract`](../type-aliases/DeployedContract.md)\<`C`\>\>

## Call Signature

> **deployContract**\<`C`\>(`providers`, `options`): `Promise`\<[`DeployedContract`](../type-aliases/DeployedContract.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`DeployContractOptionsWithPrivateState`](../type-aliases/DeployContractOptionsWithPrivateState.md)\<`C`\>

### Returns

`Promise`\<[`DeployedContract`](../type-aliases/DeployedContract.md)\<`C`\>\>
