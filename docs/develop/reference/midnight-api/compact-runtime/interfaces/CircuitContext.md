[**@midnight-ntwrk/compact-runtime v0.10.1**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CircuitContext

# Interface: CircuitContext\<PS\>

The external information accessible from within a Compact circuit call

## Type Parameters

### PS

`PS` = `any`

## Properties

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
