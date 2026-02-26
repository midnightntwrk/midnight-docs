[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / PublicDataProvider

# Interface: PublicDataProvider

Interface for a public data service. This service retrieves public data from the blockchain.
TODO: Add timeouts or retry limits to 'watchFor' queries.

## Methods

### contractStateObservable()

> **contractStateObservable**(`address`, `config`): `Observable`\<`ContractState`\>

Creates a stream of contract states. The observable emits a value every time a state is either
created or updated at the given address.
Waits indefinitely for matching data to appear.

#### Parameters

##### address

`string`

The address of the contract of interest.

##### config

[`ContractStateObservableConfig`](../type-aliases/ContractStateObservableConfig.md)

The configuration for the observable.

#### Returns

`Observable`\<`ContractState`\>

***

### queryContractState()

> **queryContractState**(`contractAddress`, `config?`): `Promise`\<`ContractState` \| `null`\>

Retrieves the on-chain state of a contract. If no block hash or block height are provided, the
contract state at the address in the latest block is returned.
Immediately returns null if no matching data is found.

#### Parameters

##### contractAddress

`string`

The address of the contract of interest.

##### config?

The configuration of the query.
              If `undefined` returns the latest states.

[`BlockHeightConfig`](../type-aliases/BlockHeightConfig.md) | [`BlockHashConfig`](../type-aliases/BlockHashConfig.md)

#### Returns

`Promise`\<`ContractState` \| `null`\>

***

### queryDeployContractState()

> **queryDeployContractState**(`contractAddress`): `Promise`\<`ContractState` \| `null`\>

Retrieves the contract state included in the deployment of the contract at the given contract address.
Immediately returns null if no matching data is found.

#### Parameters

##### contractAddress

`string`

The address of the contract of interest.

#### Returns

`Promise`\<`ContractState` \| `null`\>

***

### queryUnshieldedBalances()

> **queryUnshieldedBalances**(`contractAddress`, `config?`): `Promise`\<[`UnshieldedBalances`](../type-aliases/UnshieldedBalances.md) \| `null`\>

Retrieves the unshielded balances associated with a specific contract address.

#### Parameters

##### contractAddress

`string`

The address of the contract of interest.

##### config?

The configuration of the query.
              If `undefined` returns the latest states.

[`BlockHeightConfig`](../type-aliases/BlockHeightConfig.md) | [`BlockHashConfig`](../type-aliases/BlockHashConfig.md)

#### Returns

`Promise`\<[`UnshieldedBalances`](../type-aliases/UnshieldedBalances.md) \| `null`\>

***

### queryZSwapAndContractState()

> **queryZSwapAndContractState**(`contractAddress`, `config?`): `Promise`\<\[`ZswapChainState`, `ContractState`\] \| `null`\>

Retrieves the zswap chain state (token balances) and the contract state of the contract at the
given address. Both states are retrieved in a single query to ensure consistency between the two.
Immediately returns null if no matching data is found.

#### Parameters

##### contractAddress

`string`

The address of the contract of interest.

##### config?

The configuration of the query.
              If `undefined` returns the latest states.

[`BlockHeightConfig`](../type-aliases/BlockHeightConfig.md) | [`BlockHashConfig`](../type-aliases/BlockHashConfig.md)

#### Returns

`Promise`\<\[`ZswapChainState`, `ContractState`\] \| `null`\>

***

### unshieldedBalancesObservable()

> **unshieldedBalancesObservable**(`address`, `config`): `Observable`\<[`UnshieldedBalances`](../type-aliases/UnshieldedBalances.md)\>

Retrieves an observable that tracks the unshielded balances for a specific contract address.

#### Parameters

##### address

`string`

The contract address for which unshielded balances are being observed.

##### config

[`ContractStateObservableConfig`](../type-aliases/ContractStateObservableConfig.md)

The configuration object for observing contract state changes.

#### Returns

`Observable`\<[`UnshieldedBalances`](../type-aliases/UnshieldedBalances.md)\>

An observable that emits the unshielded balances for the provided address.

***

### watchForContractState()

> **watchForContractState**(`contractAddress`): `Promise`\<`ContractState`\>

Retrieves the contract state of the contract with the given address.
Waits indefinitely for matching data to appear.

#### Parameters

##### contractAddress

`string`

The address of the contract of interest.

#### Returns

`Promise`\<`ContractState`\>

***

### watchForDeployTxData()

> **watchForDeployTxData**(`contractAddress`): `Promise`\<[`FinalizedTxData`](FinalizedTxData.md)\>

Retrieves data of the deployment transaction for the contract at the given contract address.

**IMPORTANT: This method waits indefinitely** until the deployment transaction appears on the
blockchain. It will never timeout or reject unless an error occurs.

Custom implementations MUST maintain this indefinite waiting behavior to ensure consistency
across all PublicDataProvider implementations. Do not implement timeouts in this method.

#### Parameters

##### contractAddress

`string`

The address of the contract of interest.

#### Returns

`Promise`\<[`FinalizedTxData`](FinalizedTxData.md)\>

A promise that resolves with finalized transaction data when the deployment appears on-chain.
         The promise never rejects due to timeout.

***

### watchForTxData()

> **watchForTxData**(`txId`): `Promise`\<[`FinalizedTxData`](FinalizedTxData.md)\>

Retrieves data of the transaction containing the call or deployment with the given identifier.

**IMPORTANT: This method waits indefinitely** until the transaction appears on the blockchain.
It will never timeout or reject unless an error occurs.

Custom implementations MUST maintain this indefinite waiting behavior to ensure consistency
across all PublicDataProvider implementations. Do not implement timeouts in this method.

Applications using this method should be aware that:
- The promise will not resolve until the transaction appears on-chain
- If a transaction is invalid and never appears, this will never return
- Consider using application-level timeouts or cancellation mechanisms if needed

#### Parameters

##### txId

`string`

The identifier of the call or deployment of interest.

#### Returns

`Promise`\<[`FinalizedTxData`](FinalizedTxData.md)\>

A promise that resolves with finalized transaction data when the transaction appears on-chain.
         The promise never rejects due to timeout.

***

### watchForUnshieldedBalances()

> **watchForUnshieldedBalances**(`contractAddress`): `Promise`\<[`UnshieldedBalances`](../type-aliases/UnshieldedBalances.md)\>

Monitors for any unshielded balances associated with a specific contract address.

#### Parameters

##### contractAddress

`string`

The address of the contract to monitor for unshielded balances.

#### Returns

`Promise`\<[`UnshieldedBalances`](../type-aliases/UnshieldedBalances.md)\>

A promise that resolves to the detected unshielded balances.
