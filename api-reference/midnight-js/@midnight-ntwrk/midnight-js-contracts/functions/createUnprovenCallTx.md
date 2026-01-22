[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createUnprovenCallTx

# Function: createUnprovenCallTx()

Calls a circuit using states fetched from the public data provider and private state
provider, then creates an unbalanced, unproven, unsubmitted, call transaction.

## Param

The providers to use to create the call transaction.

## Param

Configuration.

## Throws

IncompleteCallTxPrivateStateConfig If a `privateStateId` was given but a `privateStateProvider`
                                          was not. We assume that when a user gives a `privateStateId`,
                                          they want to update the private state store.

## Call Signature

> **createUnprovenCallTx**\<`C`, `ICK`\>(`providers`, `options`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`undefined`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`undefined`\>\>

#### ICK

`ICK` *extends* `string`

### Parameters

#### providers

[`UnprovenCallTxProvidersBase`](../type-aliases/UnprovenCallTxProvidersBase.md)

#### options

[`CallOptionsWithArguments`](../type-aliases/CallOptionsWithArguments.md)\<`C`, `ICK`\>

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>

## Call Signature

> **createUnprovenCallTx**\<`C`, `ICK`\>(`providers`, `options`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

#### ICK

`ICK` *extends* `string`

### Parameters

#### providers

[`UnprovenCallTxProvidersWithPrivateState`](../type-aliases/UnprovenCallTxProvidersWithPrivateState.md)\<`C`\>

#### options

[`CallTxOptionsWithPrivateStateId`](../type-aliases/CallTxOptionsWithPrivateStateId.md)\<`C`, `ICK`\>

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>
