[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / TransactionContext

# Interface: TransactionContext\<C, ICK\>

Encapsulates the context for managing a scoped contract transaction.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### ICK

`ICK` *extends* `Contract.ImpureCircuitId`\<`C`\> = `Contract.ImpureCircuitId`\<`C`\>

## Properties

### \[CacheStates\]()

> `readonly` **\[CacheStates\]**: (`states`) => `void`

#### Parameters

##### states

[`PublicContractStates`](../type-aliases/PublicContractStates.md) | [`ContractStates`](../type-aliases/ContractStates.md)\<`PrivateState`\<`C`\>\>

#### Returns

`void`

***

### \[MergeUnsubmittedCallTxData\]()

> `readonly` **\[MergeUnsubmittedCallTxData\]**: (`circuitId`, `callData`, `privateStateId?`) => `void`

#### Parameters

##### circuitId

`ICK`

##### callData

[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>

##### privateStateId?

`string`

#### Returns

`void`

***

### \[Submit\]()

> `readonly` **\[Submit\]**: () => `Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `ICK`\>\>

#### Returns

`Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `ICK`\>\>

***

### \[TypeId\]

> `readonly` **\[TypeId\]**: *typeof* `TypeId`

## Methods

### getCurrentStates()

> **getCurrentStates**(): [`PublicContractStates`](../type-aliases/PublicContractStates.md) \| [`ContractStates`](../type-aliases/ContractStates.md)\<`PrivateState`\<`C`\>\> \| `undefined`

Gets the current cached contract states within the transaction context.

#### Returns

[`PublicContractStates`](../type-aliases/PublicContractStates.md) \| [`ContractStates`](../type-aliases/ContractStates.md)\<`PrivateState`\<`C`\>\> \| `undefined`

A cached [ContractStates](../type-aliases/ContractStates.md) instance, or `undefined` if circuit calls are yet to be made.

#### Remarks

The returned states represent the unsubmitted _running_ state of the contract within the transaction context,
reflecting any unsubmitted circuit calls made to the contract during the scope of the transaction.

***

### getLastUnsubmittedCallTxDataToTransact()

> **getLastUnsubmittedCallTxDataToTransact**(): \[[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>, `string`?\] \| `undefined`

Gets the last unsubmitted call transaction data.

#### Returns

\[[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `ICK`\>, `string`?\] \| `undefined`

A tuple containing an [UnsubmittedCallTxData](../type-aliases/UnsubmittedCallTxData.md) instance, and an optional private state
ID, or `undefined` if circuit calls are yet to be made.
