[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / getPublicStates

# Function: getPublicStates()

> **getPublicStates**(`publicDataProvider`, `contractAddress`): `Promise`\<[`PublicContractStates`](../type-aliases/PublicContractStates.md)\>

Fetches only the public visible (Zswap and ledger) states of a contract.

## Parameters

### publicDataProvider

[`PublicDataProvider`](../../midnight-js-types/interfaces/PublicDataProvider.md)

The provider to use to fetch the public states (Zswap and ledger)
                          from the blockchain.

### contractAddress

`string`

The ledger address of the contract.

## Returns

`Promise`\<[`PublicContractStates`](../type-aliases/PublicContractStates.md)\>
