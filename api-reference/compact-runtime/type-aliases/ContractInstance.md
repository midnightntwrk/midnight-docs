[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ContractInstance

# Type Alias: ContractInstance

```ts
type ContractInstance = {
  provableCircuits: ProvableCircuits;
};
```

An instance of a generated module's `Contract` class. Only `provableCircuits` is reachable from a
cross-contract call.

## Properties

### provableCircuits

```ts
readonly provableCircuits: ProvableCircuits;
```
