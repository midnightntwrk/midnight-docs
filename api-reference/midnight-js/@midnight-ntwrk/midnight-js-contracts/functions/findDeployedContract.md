[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / findDeployedContract

# Function: findDeployedContract()

Creates an instance of [FoundContract](../type-aliases/FoundContract.md) given the address of a deployed contract and an
optional private state ID at which an existing private state is stored. When given, the current value
at the private state ID is used as the `initialPrivateState` value in the `finalizedDeployTxData`
property of the returned `FoundContract`.

## Param

The providers used to manage transaction lifecycles.

## Param

Configuration.

## Throws

Error Improper `privateStateId` and `initialPrivateState` configuration.

## Throws

Error No contract state could be found at `contractAddress`.

## Throws

TypeError Thrown if `contractAddress` is not correctly formatted as a contract address.

## Throws

ContractTypeError One or more circuits defined on `contract` are undefined on the contract
                          state found at `contractAddress`, or have mis-matched verifier keys.

## Throws

IncompleteFindContractPrivateStateConfig If an `initialPrivateState` is given but no
                                                 `privateStateId` is given to store it under.

## Call Signature

> **findDeployedContract**\<`C`\>(`providers`, `options`): `Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`undefined`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`undefined`\>\>

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>, `unknown`\>

#### options

[`FindDeployedContractOptionsBase`](../type-aliases/FindDeployedContractOptionsBase.md)\<`C`\>

### Returns

`Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>

## Call Signature

> **findDeployedContract**\<`C`\>(`providers`, `options`): `Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`FindDeployedContractOptionsExistingPrivateState`](../type-aliases/FindDeployedContractOptionsExistingPrivateState.md)\<`C`\>

### Returns

`Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>

## Call Signature

> **findDeployedContract**\<`C`\>(`providers`, `options`): `Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)\<`any`, [`Witnesses`](../../midnight-js-types/type-aliases/Witnesses.md)\<`any`\>\>

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`FindDeployedContractOptionsStorePrivateState`](../type-aliases/FindDeployedContractOptionsStorePrivateState.md)\<`C`\>

### Returns

`Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>
