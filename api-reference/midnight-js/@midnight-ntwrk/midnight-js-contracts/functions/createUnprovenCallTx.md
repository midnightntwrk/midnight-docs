[**Midnight.js API Reference v4.0.2**](../../../README.md)

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

> **createUnprovenCallTx**\<`C`, `PCK`\>(`providers`, `options`, `transactionContext?`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

#### PCK

`PCK` *extends* `string`

### Parameters

#### providers

[`UnprovenCallTxProvidersBase`](../type-aliases/UnprovenCallTxProvidersBase.md)

#### options

[`CallOptionsWithArguments`](../type-aliases/CallOptionsWithArguments.md)\<`C`, `PCK`\>

#### transactionContext?

[`TransactionContext`](../interfaces/TransactionContext.md)\<`C`, `PCK`\>

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>

## Call Signature

> **createUnprovenCallTx**\<`C`, `PCK`\>(`providers`, `options`, `transactionContext?`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

#### PCK

`PCK` *extends* `string`

### Parameters

#### providers

[`UnprovenCallTxProvidersWithPrivateState`](../type-aliases/UnprovenCallTxProvidersWithPrivateState.md)\<`C`\>

#### options

[`CallTxOptionsWithPrivateStateId`](../type-aliases/CallTxOptionsWithPrivateStateId.md)\<`C`, `PCK`\>

#### transactionContext?

[`TransactionContext`](../interfaces/TransactionContext.md)\<`C`, `PCK`\>

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>
