[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createUnprovenCallTxFromInitialStates

# Function: createUnprovenCallTxFromInitialStates()

Calls a circuit using the provided initial `states` and creates an unbalanced,
unproven, unsubmitted, call transaction.

## Param

Configuration.

## Call Signature

> **createUnprovenCallTxFromInitialStates**\<`C`, `ICK`\>(`options`, `walletCoinPublicKey`, `walletEncryptionPublicKey`): [`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`undefined`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`undefined`\>\>

#### ICK

`ICK` *extends* `string`

### Parameters

#### options

[`CallOptionsWithProviderDataDependencies`](../type-aliases/CallOptionsWithProviderDataDependencies.md)\<`C`, `ICK`\>

#### walletCoinPublicKey

`string`

#### walletEncryptionPublicKey

`string`

### Returns

[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>

## Call Signature

> **createUnprovenCallTxFromInitialStates**\<`C`, `ICK`\>(`options`, `walletCoinPublicKey`, `walletEncryptionPublicKey`): [`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

#### ICK

`ICK` *extends* `string`

### Parameters

#### options

[`CallOptionsWithPrivateState`](../type-aliases/CallOptionsWithPrivateState.md)\<`C`, `ICK`\>

#### walletCoinPublicKey

`string`

#### walletEncryptionPublicKey

`string`

### Returns

[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>
