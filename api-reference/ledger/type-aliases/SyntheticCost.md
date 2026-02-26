[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / SyntheticCost

# Type Alias: SyntheticCost

```ts
type SyntheticCost = {
  blockUsage: bigint;
  bytesChurned: bigint;
  bytesWritten: bigint;
  computeTime: bigint;
  readTime: bigint;
};
```

A modelled cost of a transaction or block.

## Properties

### blockUsage

```ts
blockUsage: bigint;
```

The number of bytes of blockspace used

***

### bytesChurned

```ts
bytesChurned: bigint;
```

The number of (modelled) bytes written temporarily or overwritten.

***

### bytesWritten

```ts
bytesWritten: bigint;
```

The net number of (modelled) bytes written, i.e. max(0, absolute written bytes less deleted bytes).

***

### computeTime

```ts
computeTime: bigint;
```

The amount of (modelled) time spent in single-threaded compute, measured in picoseconds.

***

### readTime

```ts
readTime: bigint;
```

The amount of (modelled) time spent reading from disk, measured in picoseconds.
