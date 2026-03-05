[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createUnprovenCallTxFromInitialStates

# Function: createUnprovenCallTxFromInitialStates()

Calls a circuit using the provided initial `states` and creates an unbalanced,
unproven, unsubmitted, call transaction.

## Param

Configuration.

## Param

## Param

## Call Signature

> **createUnprovenCallTxFromInitialStates**\<`C`, `ICK`\>(`zkConfigProvider`, `options`, `walletEncryptionPublicKey`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

#### ICK

`ICK` *extends* `string`

### Parameters

#### zkConfigProvider

`ZKConfigProvider`\<`string`\>

#### options

[`CallOptionsWithProviderDataDependencies`](../type-aliases/CallOptionsWithProviderDataDependencies.md)\<`C`, `ICK`\>

#### walletEncryptionPublicKey

`string`

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>

## Call Signature

> **createUnprovenCallTxFromInitialStates**\<`C`, `ICK`\>(`zkConfigProvider`, `options`, `walletEncryptionPublicKey`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

#### ICK

`ICK` *extends* `string`

### Parameters

#### zkConfigProvider

`ZKConfigProvider`\<`string`\>

#### options

[`CallOptionsWithPrivateState`](../type-aliases/CallOptionsWithPrivateState.md)\<`C`, `ICK`\>

#### walletEncryptionPublicKey

`string`

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>
