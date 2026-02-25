[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createUnprovenDeployTxFromVerifierKeys

# Function: createUnprovenDeployTxFromVerifierKeys()

Calls a contract constructor and creates an unbalanced, unproven, unsubmitted, deploy transaction
from the constructor results.

## Param

The verifier keys for the contract being deployed.

## Param

The Zswap coin public key of the current user.

## Param

Configuration.

## Param

## Call Signature

> **createUnprovenDeployTxFromVerifierKeys**\<`C`\>(`zkConfigProvider`, `coinPublicKey`, `options`, `encryptionPublicKey`): `Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

### Parameters

#### zkConfigProvider

`ZKConfigProvider`\<`string`\>

#### coinPublicKey

`string`

#### options

[`DeployTxOptionsBase`](../type-aliases/DeployTxOptionsBase.md)\<`C`\>

#### encryptionPublicKey

`string`

### Returns

`Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>

## Call Signature

> **createUnprovenDeployTxFromVerifierKeys**\<`C`\>(`zkConfigProvider`, `coinPublicKey`, `options`, `encryptionPublicKey`): `Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

### Parameters

#### zkConfigProvider

`ZKConfigProvider`\<`string`\>

#### coinPublicKey

`string`

#### options

[`DeployTxOptionsWithPrivateState`](../type-aliases/DeployTxOptionsWithPrivateState.md)\<`C`\>

#### encryptionPublicKey

`string`

### Returns

`Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>
