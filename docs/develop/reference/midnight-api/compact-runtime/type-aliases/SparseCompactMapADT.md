[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactMapADT

# Type Alias: SparseCompactMapADT

```ts
type SparseCompactMapADT = {
  keyType?: SparseCompactValue;
  tag: "map";
  valueType?:   | SparseCompactADT
     | SparseCompactValue;
};
```

A data structure indicating the locations of all contract references in a Compact `Map` ADT.

## Properties

### keyType?

```ts
optional keyType: SparseCompactValue;
```

A data structure indicating the locations of all contract references in the Compact values that are the keys of the
outer `Map` ADT.

***

### tag

```ts
tag: "map";
```

***

### valueType?

```ts
optional valueType: 
  | SparseCompactADT
  | SparseCompactValue;
```

A data structure indicating the locations of all contract references in the Compact entities that are the values of the
outer `Map` ADT. Since the values of a `Map` ADT may be either Compact values or other `Map` ADTs, we take the union
of the corresponding data structures.
