[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / TransactionContext

# Interface: TransactionContext\<C, PCK\>

Encapsulates the context for managing a scoped contract transaction.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\> = `Contract.ProvableCircuitId`\<`C`\>

## Properties

### \[CacheStates\]

> `readonly` **\[CacheStates\]**: (`states`, `identity`) => `void`

#### Parameters

##### states

[`PublicContractStates`](../type-aliases/PublicContractStates.md) \| [`ContractStates`](../type-aliases/ContractStates.md)\<`PrivateState`\<`C`\>\>

##### identity

`CachedStateIdentity`

#### Returns

`void`

***

### \[GetCurrentStatesForIdentity\]

> `readonly` **\[GetCurrentStatesForIdentity\]**: (`identity`) => [`PublicContractStates`](../type-aliases/PublicContractStates.md) \| [`ContractStates`](../type-aliases/ContractStates.md)\<`PrivateState`\<`C`\>\> \| `undefined`

#### Parameters

##### identity

`CachedStateIdentity`

#### Returns

[`PublicContractStates`](../type-aliases/PublicContractStates.md) \| [`ContractStates`](../type-aliases/ContractStates.md)\<`PrivateState`\<`C`\>\> \| `undefined`

***

### \[MergeUnsubmittedCallTxData\]

> `readonly` **\[MergeUnsubmittedCallTxData\]**: (`circuitId`, `callData`, `privateStateId?`) => `void`

#### Parameters

##### circuitId

`PCK`

##### callData

[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>

##### privateStateId?

`string`

#### Returns

`void`

***

### \[Submit\]

> `readonly` **\[Submit\]**: () => `Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

#### Returns

`Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

***

### \[TypeId\]

> `readonly` **\[TypeId\]**: *typeof* `TypeId`

## Methods

### getAdditionalMappings()

> **getAdditionalMappings**(): `ReadonlyMap`\<`string`, `string`\> \| `undefined`

Gets the additional scoped CoinPublicKey to EncPublicKey mappings.

#### Returns

`ReadonlyMap`\<`string`, `string`\> \| `undefined`

A `ReadonlyMap<CoinPublicKey, EncPublicKey>` instance, or `undefined` if no additional
mappings were specified for the current transaction context.

***

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

> **getLastUnsubmittedCallTxDataToTransact**(): \[[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>, `string`?\] \| `undefined`

Gets the last unsubmitted call transaction data.

#### Returns

\[[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>, `string`?\] \| `undefined`

A tuple containing an [UnsubmittedCallTxData](../type-aliases/UnsubmittedCallTxData.md) instance, and an optional private state
ID, or `undefined` if circuit calls are yet to be made.
