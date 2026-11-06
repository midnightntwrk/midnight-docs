[**@midnight-ntwrk/compact-runtime v0.21.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CrossContractInputs

# Type Alias: CrossContractInputs

```ts
type CrossContractInputs = {
  stateProvider: ContractStateProvider;
};
```

The inputs that let an execution make cross-contract calls.

## Properties


### stateProvider

```ts
readonly stateProvider: ContractStateProvider;
```

Fetches a callee's deployed state at [CircuitContextOptions.parentBlockHash](CircuitContextOptions.md#parentblockhash).
