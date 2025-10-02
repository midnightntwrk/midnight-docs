[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactCellADT

# Type Alias: SparseCompactCellADT

```ts
type SparseCompactCellADT = {
  tag: "cell";
  valueType: SparseCompactValue;
};
```

A data structure indicating the locations of all contract references in a Compact `Cell` ADT.

## Properties

### tag

```ts
tag: "cell";
```

***

### valueType

```ts
valueType: SparseCompactValue;
```

A data structure indicating the locations of all contract references in the Compact value contained in the outer `Cell` ADT.
