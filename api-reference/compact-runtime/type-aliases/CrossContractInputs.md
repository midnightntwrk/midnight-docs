[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CrossContractInputs

# Type Alias: CrossContractInputs

```ts
type CrossContractInputs = {
  moduleProvider: ContractModuleProvider;
  stateProvider: ContractStateProvider;
};
```

The inputs that let an execution make cross-contract calls.

## Properties

### moduleProvider

```ts
readonly moduleProvider: ContractModuleProvider;
```

The [ContractModuleProvider](../interfaces/ContractModuleProvider.md).

***

### stateProvider

```ts
readonly stateProvider: ContractStateProvider;
```

Fetches a callee's deployed state at [CircuitContextOptions.parentBlockHash](CircuitContextOptions.md#parentblockhash).
