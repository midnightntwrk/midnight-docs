[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ContractStateProvider

# Interface: ContractStateProvider

A user-provided interface for fetching the public state of a contract
at a given block hash. Used exclusively to retrieve the state of cross-contract
call targets at runtime. Assumes state returned is the post-block evaluation
contract state.

The `parentBlockHash` value in [CircuitContext](CircuitContext.md) is used for as the `blockHash` argument.

## Methods

### getContractState()

```ts
getContractState(blockHash, address): Promise<ContractState | undefined>;
```

#### Parameters

##### blockHash

`string`

##### address

`string`

#### Returns

`Promise`\<[`ContractState`](../classes/ContractState.md) \| `undefined`\>
