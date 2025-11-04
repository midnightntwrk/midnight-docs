[**Midnight.js API Reference v2.0.2**](../../../README.md)

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

> **queryContractState**(`contractAddress`, `config`?): `Promise`\<`null` \| `ContractState`\>

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

`Promise`\<`null` \| `ContractState`\>

***

### queryDeployContractState()

> **queryDeployContractState**(`contractAddress`): `Promise`\<`null` \| `ContractState`\>

Retrieves the contract state included in the deployment of the contract at the given contract address.
Immediately returns null if no matching data is found.

#### Parameters

##### contractAddress

`string`

The address of the contract of interest.

#### Returns

`Promise`\<`null` \| `ContractState`\>

***

### queryZSwapAndContractState()

> **queryZSwapAndContractState**(`contractAddress`, `config`?): `Promise`\<`null` \| \[`ZswapChainState`, `ContractState`\]\>

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

`Promise`\<`null` \| \[`ZswapChainState`, `ContractState`\]\>

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
Waits indefinitely for matching data to appear.

#### Parameters

##### contractAddress

`string`

The address of the contract of interest.

#### Returns

`Promise`\<[`FinalizedTxData`](FinalizedTxData.md)\>

***

### watchForTxData()

> **watchForTxData**(`txId`): `Promise`\<[`FinalizedTxData`](FinalizedTxData.md)\>

Retrieves data of the transaction containing the call or deployment with the given identifier.
Waits indefinitely for matching data to appear.

#### Parameters

##### txId

`string`

The identifier of the call or deployment of interest.

#### Returns

`Promise`\<[`FinalizedTxData`](FinalizedTxData.md)\>
