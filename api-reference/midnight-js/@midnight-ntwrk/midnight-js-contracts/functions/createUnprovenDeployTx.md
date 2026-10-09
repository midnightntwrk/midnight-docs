[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createUnprovenDeployTx

# Function: createUnprovenDeployTx()

Calls a contract constructor and creates an unbalanced, unproven, unsubmitted, deploy transaction
from the constructor results.

## Param

The providers to use to create the deploy transaction.

## Param

Configuration.

## Remarks

The returned [UnsubmittedDeployTxData](../type-aliases/UnsubmittedDeployTxData.md) is privacy-sensitive and
carries the unproven transaction, signing key, initial private state, and
initial Zswap state. See that type for handling guidance before logging,
serializing, or transmitting the result.

## Call Signature

> **createUnprovenDeployTx**\<`C`\>(`providers`, `options`): `Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

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

`C` *extends* `Any`

### Parameters

#### providers

[`UnprovenDeployTxProviders`](../type-aliases/UnprovenDeployTxProviders.md)\<`C`\>

#### options

[`DeployTxOptionsWithPrivateState`](../type-aliases/DeployTxOptionsWithPrivateState.md)\<`C`\>

### Returns

`Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>
