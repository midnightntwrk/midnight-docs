[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactStruct

# Type Alias: SparseCompactStruct

```ts
type SparseCompactStruct = {
  elements: Record<string, SparseCompactType>;
  tag: "struct";
};
```

A data structure indicating the locations of contract references in a Compact struct.

## Properties

### elements

```ts
elements: Record<string, SparseCompactType>;
```

A data structure indicating the locations of contract references in the elements of a Compact struct. The keys of
the record correspond to fields of the Compact struct that contain contract references. We use the keys of the record
to explore the elements of the corresponding CompactStruct.

***

### tag

```ts
tag: "struct";
```
