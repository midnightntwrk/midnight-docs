[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitDeployTx

# Function: submitDeployTx()

Creates and submits a deploy transaction for the given contract.

## Param

The providers used to manage the deploy lifecycle.

## Param

Configuration.

## Call Signature

> **submitDeployTx**\<`C`\>(`providers`, `options`): `Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`undefined`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`undefined`\>\>

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>, `unknown`\>

#### options

[`DeployTxOptionsBase`](../type-aliases/DeployTxOptionsBase.md)\<`C`\>

### Returns

`Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>

## Call Signature

> **submitDeployTx**\<`C`\>(`providers`, `options`): `Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`DeployTxOptionsWithPrivateStateId`](../type-aliases/DeployTxOptionsWithPrivateStateId.md)\<`C`\>

### Returns

`Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>
