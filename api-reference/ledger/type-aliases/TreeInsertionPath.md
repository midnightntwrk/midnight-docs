[**@midnight/ledger v8.1.2**](../README.md)

***

[@midnight/ledger](../globals.md) / TreeInsertionPath

# Type Alias: TreeInsertionPath\<A\>

```ts
type TreeInsertionPath<A> = {
  annotation: A;
  leafHash: string;
  path: TreeInsertionPathEntry[];
};
```

A path evidencing how to insert an entry into a Merkle tree, even if it is
collapsed.

## Type Parameters

### A

`A`

## Properties

### annotation

```ts
annotation: A;
```

***

### leafHash

```ts
leafHash: string;
```

***

### path

```ts
path: TreeInsertionPathEntry[];
```
