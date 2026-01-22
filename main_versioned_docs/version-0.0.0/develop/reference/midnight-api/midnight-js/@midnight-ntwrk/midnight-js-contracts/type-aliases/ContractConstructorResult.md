[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ContractConstructorResult

# Type Alias: ContractConstructorResult\<C\>

> **ContractConstructorResult**\<`C`\> = `object`

The updated states resulting from executing a contract constructor.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)

## Properties

### nextContractState

> `readonly` **nextContractState**: `ContractState`

The public state resulting from executing the contract constructor.

***

### nextPrivateState

> `readonly` **nextPrivateState**: [`PrivateState`](../../midnight-js-types/type-aliases/PrivateState.md)\<`C`\>

The private state resulting from executing the contract constructor.

***

### nextZswapLocalState

> `readonly` **nextZswapLocalState**: `ZswapLocalState`

The Zswap local state resulting from executing the contract constructor.
