[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createUnprovenCallTx

# Function: createUnprovenCallTx()

Calls a circuit using states fetched from the public data provider and private state
provider, then creates an unbalanced, unproven, unsubmitted, call transaction.

## Param

The providers to use to create the call transaction.

## Param

Configuration.

## Param

Optional scoped transaction context to participate in an
       existing transaction scope.

## Throws

IncompleteCallTxPrivateStateConfig If a `privateStateId` was given but a `privateStateProvider`
                                          was not. We assume that when a user gives a `privateStateId`,
                                          they want to update the private state store.

## Call Signature

> **createUnprovenCallTx**\<`C`, `ICK`\>(`providers`, `options`, `transactionContext?`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

#### ICK

`ICK` *extends* `string`

### Parameters

#### providers

[`UnprovenCallTxProvidersBase`](../type-aliases/UnprovenCallTxProvidersBase.md)

#### options

[`CallOptionsWithArguments`](../type-aliases/CallOptionsWithArguments.md)\<`C`, `ICK`\>

#### transactionContext?

[`TransactionContext`](../interfaces/TransactionContext.md)\<`C`, `ICK`\>

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>

## Call Signature

> **createUnprovenCallTx**\<`C`, `ICK`\>(`providers`, `options`, `transactionContext?`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

#### ICK

`ICK` *extends* `string`

### Parameters

#### providers

[`UnprovenCallTxProvidersWithPrivateState`](../type-aliases/UnprovenCallTxProvidersWithPrivateState.md)\<`C`\>

#### options

[`CallTxOptionsWithPrivateStateId`](../type-aliases/CallTxOptionsWithPrivateStateId.md)\<`C`, `ICK`\>

#### transactionContext?

[`TransactionContext`](../interfaces/TransactionContext.md)\<`C`, `ICK`\>

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>\>
