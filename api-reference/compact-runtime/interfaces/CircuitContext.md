[**@midnight-ntwrk/compact-runtime v0.14.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CircuitContext

# Interface: CircuitContext\<PS\>

The external information accessible from within a Compact circuit call

## Type Parameters

### PS

`PS` = `any`

## Properties

### costModel

```ts
costModel: CostModel;
```

The cost model to use for the execution.

***

### currentPrivateState

```ts
currentPrivateState: PS;
```

The current private state for the contract.

***

### currentQueryContext

```ts
currentQueryContext: QueryContext;
```

The current on-chain context the transaction is evolving.

***

### currentZswapLocalState

```ts
currentZswapLocalState: EncodedZswapLocalState;
```

The current Zswap local state. Tracks inputs and outputs produced during circuit execution.

***

### gasLimit?

```ts
optional gasLimit: RunningCost;
```

The gas limit for this circuit.
