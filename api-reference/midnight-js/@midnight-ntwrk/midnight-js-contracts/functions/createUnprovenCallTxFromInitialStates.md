[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createUnprovenCallTxFromInitialStates

# Function: createUnprovenCallTxFromInitialStates()

Calls a circuit using the provided initial `states` and creates an unbalanced,
unproven, unsubmitted, call transaction.

## Param

## Param

Configuration.

## Param

## Call Signature

> **createUnprovenCallTxFromInitialStates**\<`C`, `PCK`\>(`zkConfigProvider`, `options`, `walletEncryptionPublicKey`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

#### PCK

`PCK` *extends* `string`

### Parameters

#### zkConfigProvider

[`ZKConfigProvider`](#)\<`string`\>

#### options

[`CallOptionsWithProviderDataDependencies`](../type-aliases/CallOptionsWithProviderDataDependencies.md)\<`C`, `PCK`\>

#### walletEncryptionPublicKey

`string`

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>

## Call Signature

> **createUnprovenCallTxFromInitialStates**\<`C`, `PCK`\>(`zkConfigProvider`, `options`, `walletEncryptionPublicKey`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

#### PCK

`PCK` *extends* `string`

### Parameters

#### zkConfigProvider

[`ZKConfigProvider`](#)\<`string`\>

#### options

[`CallOptionsWithPrivateState`](../type-aliases/CallOptionsWithPrivateState.md)\<`C`, `PCK`\>

#### walletEncryptionPublicKey

`string`

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>
