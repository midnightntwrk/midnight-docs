[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CircuitContext

# Interface: CircuitContext\<PS\>

The external information accessible from within a Compact circuit call

## Type Parameters

### PS

`PS` = `any`

## Properties

### activeContracts?

```ts
optional activeContracts: Set<string>;
```

The set of contract addresses currently executing on the cross-contract call
stack: the entry contract plus every callee whose call has not yet returned.
Maintained by [crossContractCall](../functions/crossContractCall.md) and shared by reference across the call
tree (via [copyCircuitContext](../functions/copyCircuitContext.md)). Only consulted when [reentrancyGuard](#reentrancyguard)
is set.

***

### callContext

```ts
callContext: CallContext<PS>;
```

The context for the current call.

***

### callProofDataTrace

```ts
callProofDataTrace: CallProofDataTrace;
```

Sequence of calls made during the execution of the circuit (including the call for the root circuit).

***

### contractStates?

```ts
optional contractStates: Record<string, ContractState>;
```

The deployed [ocrt.ContractState](../classes/ContractState.md) of every cross-contract callee resolved during the
execution, keyed by address. Populated by [crossContractCall](../functions/crossContractCall.md) (via the state provider)
the first time a callee is reached. Retained — unlike the cached query context, which keeps only
ledger data — so the implementation-binding guard can read a callee's deployed verifier key for
*any* of its circuits on *every* call, including later calls to a different circuit of an
already-resolved callee. The entry contract is not recorded here; only fetched callees are.

***

### costModel

```ts
costModel: CostModel;
```

The cost model to use for the execution.

***

### events

```ts
events: LogEvent[];
```

Events emitted by the on-chain VM during circuit execution from `log` operations,
each tagged with the address of the emitting contract. A single global list shared
across the whole call tree (threaded like [callProofDataTrace](#callproofdatatrace)); a per-contract
view is a filter over the `address` tag. Surfaced via `CircuitResults.context.events`.

***

### gasCosts

```ts
gasCosts: Record<ContractAddress, RunningCost>;
```

The current gas costs for every contract in the call tree.

***

### gasLimit?

```ts
optional gasLimit: RunningCost;
```

The gas limit for this circuit.

***

### queryContexts

```ts
queryContexts: Record<ContractAddress, QueryContext>;
```

The current query context of every contract in the call tree.

***

### reentrancyGuard?

```ts
optional reentrancyGuard: boolean;
```

When `true`, [crossContractCall](../functions/crossContractCall.md) refuses to enter a contract that is
already executing on the current call stack — i.e. a re-entrant cross-contract
call (`A -> A`, or `A -> B -> A`) — and throws instead. On by default (the
upstream ledger can mis-apply transcripts on re-entry). Pass `false` to
[createCircuitContext](../functions/createCircuitContext.md) to opt out, e.g. for tests that deliberately
exercise recursion.

***

### stateProvider?

```ts
optional stateProvider: ContractStateProvider;
```

Can fetch the current state of a contract from the blockchain.
