[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / getStates

# Function: getStates()

> **getStates**\<`PS`\>(`publicDataProvider`, `privateStateProvider`, `contractAddress`, `privateStateId`): `Promise`\<[`ContractStates`](../type-aliases/ContractStates.md)\<`PS`\>\>

Retrieves the Zswap, ledger, and private states of the contract corresponding
to the given identifier using the given providers.

## Type Parameters

### PS

`PS`

## Parameters

### publicDataProvider

[`PublicDataProvider`](../../midnight-js-types/interfaces/PublicDataProvider.md)

The provider to use to fetch the public states (Zswap and ledger)
                          from the blockchain.

### privateStateProvider

[`PrivateStateProvider`](../../midnight-js-types/interfaces/PrivateStateProvider.md)\<`string`, `PS`\>

The provider to use to fetch the private state.

### contractAddress

`string`

The ledger address of the contract.

### privateStateId

`string`

The identifier for the private state of the contract.

## Returns

`Promise`\<[`ContractStates`](../type-aliases/ContractStates.md)\<`PS`\>\>
