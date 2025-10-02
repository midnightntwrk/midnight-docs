[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / contractDependencies

# Function: contractDependencies()

```ts
function contractDependencies(contractReferenceLocations, state): string[];
```

Given a [StateValue](../classes/StateValue.md) representing the current ledger state of a contract, uses the [ContractReferenceLocations](../type-aliases/ContractReferenceLocations.md)
object produced by the Compact compiler to extract the current contract addresses present in the given ledger state. The produced
contract addresses represent the contracts on which the root contract depends. The dependencies are used in a multi-contract
setting to fetch the ledger states of all contracts on which the root contract depends prior to execution.

NOTE: The given [ContractReferenceLocations](../type-aliases/ContractReferenceLocations.md) must be from the contract executable containing the ledger state constructor
      that produced the given [StateValue](../classes/StateValue.md).

## Parameters

### contractReferenceLocations

[`ContractReferenceLocations`](../type-aliases/ContractReferenceLocations.md)

A data structure pointing to contract references in the ledger state of the root contract.

### state

[`StateValue`](../classes/StateValue.md)

The current ledger state of the root contract.

## Returns

`string`[]

A list of all contract addresses (references) present in the given ledger state.

## Remarks

The algorithm has three main stages:

         1. It unwraps the PublicLedgerSegments in the given [ContractReferenceLocations](../type-aliases/ContractReferenceLocations.md) until a [SparseCompactADT](../type-aliases/SparseCompactADT.md) is reached.
            Each time a PublicLedgerSegments is unwrapped, it casts the current state value to a state value array and proceeds recursively with each
            of the state values and unwrapped ledger segments.
         2. It unwraps each [SparseCompactADT](../type-aliases/SparseCompactADT.md) in the current PublicLedgerSegments until a [SparseCompactType](../type-aliases/SparseCompactType.md) is reached.
            Each time a [SparseCompactADT](../type-aliases/SparseCompactADT.md) is unwrapped, it casts the current state value to a state representation indicated by
            the [SparseCompactADT](../type-aliases/SparseCompactADT.md).
         3. Once the current state can no longer be reduced, it must represent a Compact contract address somewhere inside the state,
            and that contract address is added to the dependency set.
