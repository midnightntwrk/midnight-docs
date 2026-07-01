[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / createCircuitContext

# Function: createCircuitContext()

```ts
function createCircuitContext<PS>(
   circuitId, 
   contractAddress, 
   coinPublicKeyOrZswapState, 
   contractState, 
   privateState, 
   stateProvider?, 
   gasLimit?, 
   costModel?, 
   time?, 
   parentBlockHash?, 
reentrancyGuard?): CircuitContext<PS>;
```

Entry point for constructing the [CircuitContext](../interfaces/CircuitContext.md) to pass as an argument to a circuit. Always use this
function to set up the initial circuit context.

## Type Parameters

### PS

`PS`

## Parameters

### circuitId

`string`

The name of the circuit being executed.

### contractAddress

`string`

The address of the contract defining the circuit being executed.

### coinPublicKeyOrZswapState

The initial Zswap local state information - used for tracking shielded coin transfers.

`string` | [`ZswapLocalState`](../interfaces/ZswapLocalState.md) | [`EncodedCoinPublicKey`](../interfaces/EncodedCoinPublicKey.md) | [`EncodedZswapLocalState`](../interfaces/EncodedZswapLocalState.md)

### contractState

The initial ledger state to execute the contract again - most often a snapshot fetched from the chain.

[`ContractState`](../classes/ContractState.md) | [`StateValue`](../classes/StateValue.md) | [`ChargedState`](../classes/ChargedState.md)

### privateState

`PS`

The initial witness / private state to execute the contract again - most often a snapshot fetched
                    from local storage.

### stateProvider?

[`ContractStateProvider`](../interfaces/ContractStateProvider.md)

The provider to use to dynamically fetch on-chain contract state. This is only used to execute
                     cross-contract calls, and is not needed if the circuit being executed does not perform any
                     cross-contract calls.

### gasLimit?

[`RunningCost`](../type-aliases/RunningCost.md)

The maximum gas this contract should consume.

### costModel?

[`CostModel`](../classes/CostModel.md)

The model capturing how much ledger operations cost.

### time?

`number`

The current time. Used to execute the block time related kernel operations.

### parentBlockHash?

`string`

The hash of the block the transaction is being built on. Also passed to [ContractStateProvider](../interfaces/ContractStateProvider.md)
                       to fetch the correct contract states when executing cross-contract calls.

### reentrancyGuard?

`boolean`

When `true`, cross-contract calls that re-enter a contract already executing on the call
                       stack (`A -> A`, or `A -> B -> A`) throw instead of running. On by default; pass `false`
                       to opt out.

## Returns

[`CircuitContext`](../interfaces/CircuitContext.md)\<`PS`\>
