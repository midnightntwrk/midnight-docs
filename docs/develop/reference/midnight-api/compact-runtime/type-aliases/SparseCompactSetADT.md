[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactSetADT

# Type Alias: SparseCompactSetADT

```ts
type SparseCompactSetADT = {
  tag: "set";
  valueType: SparseCompactValue;
};
```

A data structure indicating the locations of all contract references in a Compact `Set` ADT.

## Properties

### tag

```ts
tag: "set";
```

***

### valueType

```ts
valueType: SparseCompactValue;
```

A data structure indicating the locations of all contract references in a Compact value in the outer `Set` ADT.
