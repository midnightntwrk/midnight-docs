[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactListADT

# Type Alias: SparseCompactListADT

```ts
type SparseCompactListADT = {
  tag: "list";
  valueType: SparseCompactValue;
};
```

A data structure indicating the locations of all contract references in a Compact `List` ADT.

## Properties

### tag

```ts
tag: "list";
```

***

### valueType

```ts
valueType: SparseCompactValue;
```

A data structure indicating the locations of all contract references in a Compact value in the outer `List` ADT.
