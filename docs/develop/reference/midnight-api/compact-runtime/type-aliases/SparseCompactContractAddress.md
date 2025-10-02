[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactContractAddress

# Type Alias: SparseCompactContractAddress

```ts
type SparseCompactContractAddress = {
  tag: "contractAddress";
};
```

A data structure indicating that the current CompactValue being explored is a contract reference. When this
type is recognized, the current CompactValue should be a [ContractAddress](ContractAddress.md), and the address is added to
the dependency set.

## Properties

### tag

```ts
tag: "contractAddress";
```
