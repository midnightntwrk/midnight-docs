[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactValue

# Type Alias: SparseCompactValue

```ts
type SparseCompactValue = {
  descriptor: CompactType<unknown>;
  sparseType: SparseCompactType;
  tag: "compactValue";
};
```

A data structure indicating the locations of all contract references in a Compact value.

## Properties

### descriptor

```ts
descriptor: CompactType<unknown>;
```

A descriptor that can be used to convert an [AlignedValue](AlignedValue.md) into a TypeScript representation of the same value.
This descriptor will only ever decode `struct`s or `Vector`s that contain contract addresses.

***

### sparseType

```ts
sparseType: SparseCompactType;
```

A data structure indicating how to navigate to the contract addresses present in the output of the above `descriptor`.

***

### tag

```ts
tag: "compactValue";
```
