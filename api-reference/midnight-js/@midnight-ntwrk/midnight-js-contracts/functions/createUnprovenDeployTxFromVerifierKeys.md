[**Midnight.js API Reference v2.0.2**](../../../README.md)

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

## Call Signature

> **createUnprovenDeployTxFromVerifierKeys**\<`C`\>(`verifierKeys`, `coinPublicKey`, `options`, `encryptionPublicKey`): [`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`undefined`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`undefined`\>\>

### Parameters

#### verifierKeys

\[[`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>, [`VerifierKey`](../../midnight-js-types/type-aliases/VerifierKey.md)\][]

#### coinPublicKey

`string`

#### options

[`DeployTxOptionsBase`](../type-aliases/DeployTxOptionsBase.md)\<`C`\>

#### encryptionPublicKey

`string`

### Returns

[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>

## Call Signature

> **createUnprovenDeployTxFromVerifierKeys**\<`C`\>(`verifierKeys`, `coinPublicKey`, `options`, `encryptionPublicKey`): [`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

### Parameters

#### verifierKeys

\[[`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>, [`VerifierKey`](../../midnight-js-types/type-aliases/VerifierKey.md)\][]

#### coinPublicKey

`string`

#### options

[`DeployTxOptionsWithPrivateState`](../type-aliases/DeployTxOptionsWithPrivateState.md)\<`C`\>

#### encryptionPublicKey

`string`

### Returns

[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>
