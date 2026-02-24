[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createUnprovenDeployTx

# Function: createUnprovenDeployTx()

Calls a contract constructor and creates an unbalanced, unproven, unsubmitted, deploy transaction
from the constructor results.

## Param

The providers to use to create the deploy transaction.

## Param

Configuration.

## Call Signature

> **createUnprovenDeployTx**\<`C`\>(`providers`, `options`): `Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`undefined`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`undefined`\>\>

### Parameters

#### providers

[`UnprovenDeployTxProviders`](../type-aliases/UnprovenDeployTxProviders.md)\<`C`\>

#### options

[`DeployTxOptionsBase`](../type-aliases/DeployTxOptionsBase.md)\<`C`\>

### Returns

`Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>

## Call Signature

> **createUnprovenDeployTx**\<`C`\>(`providers`, `options`): `Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

### Parameters

#### providers

[`UnprovenDeployTxProviders`](../type-aliases/UnprovenDeployTxProviders.md)\<`C`\>

#### options

[`DeployTxOptionsWithPrivateState`](../type-aliases/DeployTxOptionsWithPrivateState.md)\<`C`\>

### Returns

`Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>
