[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ConstructorResult

# Interface: ConstructorResult\<T\>

The result of executing a contract constructor.

## Type Parameters

### T

`T`

## Properties

### currentContractState

```ts
currentContractState: ContractState;
```

The contract's initial ledger (public state).

***

### currentPrivateState

```ts
currentPrivateState: T;
```

The contract's initial private state. Potentially different from the private state passed in [ConstructorContext](ConstructorContext.md).

***

### currentZswapLocalState

```ts
currentZswapLocalState: EncodedZswapLocalState;
```

The contract's initial Zswap local state. Potentially includes outputs created in the contract's constructor.
