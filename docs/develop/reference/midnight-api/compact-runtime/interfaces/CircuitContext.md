[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CircuitContext

# Interface: CircuitContext\<T\>

The external information accessible from within a Compact circuit call

## Type Parameters

### T

`T`

## Properties

### currentPrivateState

```ts
currentPrivateState: T;
```

The current private state for the contract.

***

### currentZswapLocalState

```ts
currentZswapLocalState: EncodedZswapLocalState;
```

The current Zswap local state. Tracks inputs and outputs produced during circuit execution.

***

### originalState

```ts
originalState: ContractState;
```

The original contract state the circuit call was started at.

***

### transactionContext

```ts
transactionContext: QueryContext;
```

The current on-chain context the transaction is evolving.
