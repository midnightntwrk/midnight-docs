[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactType

# Type Alias: SparseCompactType

```ts
type SparseCompactType = 
  | SparseCompactVector
  | SparseCompactStruct
  | SparseCompactContractAddress;
```

A data structure indicating the locations of contract references in a Compact struct, vector, or (the terminating case)
a contract address.
