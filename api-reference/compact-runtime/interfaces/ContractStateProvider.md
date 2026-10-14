[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ContractStateProvider

# Interface: ContractStateProvider

A user-provided fetch of a contract's public state at a block hash, used only for cross-contract
call targets. The state returned must be post-block-evaluation; `blockHash` is the
`parentBlockHash` from the circuit context.

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
