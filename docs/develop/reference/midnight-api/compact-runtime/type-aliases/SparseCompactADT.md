[**@midnight-ntwrk/compact-runtime v0.10.1**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactADT

# Type Alias: SparseCompactADT

```ts
type SparseCompactADT = 
  | SparseCompactCellADT
  | SparseCompactArrayLikeADT
  | SparseCompactMapADT;
```

A discriminated union describing the locations of contract references in either a Compact `Cell`, `List`, `Set`, or `Map` ADT.
