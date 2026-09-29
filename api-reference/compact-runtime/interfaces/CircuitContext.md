[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

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

The contract addresses currently executing: the entry contract, plus every callee whose call
has not returned. Shared by reference across the call tree, so [crossContractCall](../functions/crossContractCall.md) can
reject re-entry (`A -> A`, `A -> B -> A`) from any depth.

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

The deployed state of every cross-contract callee, keyed by address and filled on first
resolution. The cached query context keeps only ledger data, so this is where a callee's
verifier keys are read from, for any of its circuits and on every call. The entry contract is
always on the call stack, so the re-entrancy guard keeps it out of callee position and it never
appears here.

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

Events the VM emitted from `log` operations, each tagged with the contract that emitted it.
One list for the whole call tree, threaded like [callProofDataTrace](#callproofdatatrace).

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

### moduleProvider?

```ts
optional moduleProvider: ContractModuleProvider;
```

The [ContractModuleProvider](ContractModuleProvider.md). Absent unless the execution can make cross-contract calls;
reaching [crossContractCall](../functions/crossContractCall.md) without one is a `ModuleProviderAbsent` failure.

***

### queryContexts

```ts
queryContexts: Record<ContractAddress, QueryContext>;
```

The current query context of every contract in the call tree.

***

### stateProvider?

```ts
optional stateProvider: ContractStateProvider;
```

Can fetch the current state of a contract from the blockchain.

***

### zswapLocalStates

```ts
zswapLocalStates: Record<ContractAddress, EncodedZswapLocalState>;
```

The current Zswap local state of every contract in the call tree, keyed like
[queryContexts](#querycontexts). Each contract has its own `currentIndex`, `inputs` and `outputs`; only
the submitter's `coinPublicKey` is shared, since one wallet pays for the transaction.
