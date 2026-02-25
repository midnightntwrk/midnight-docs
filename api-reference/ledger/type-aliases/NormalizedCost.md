[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / NormalizedCost

# Type Alias: NormalizedCost

```ts
type NormalizedCost = {
  blockUsage: number;
  bytesChurned: number;
  bytesWritten: number;
  computeTime: number;
  readTime: number;
};
```

A normalized form of [SyntheticCost](SyntheticCost.md).

## Properties

### blockUsage

```ts
blockUsage: number;
```

The number of bytes of blockspace used

***

### bytesChurned

```ts
bytesChurned: number;
```

The number of (modelled) bytes written temporarily or overwritten.

***

### bytesWritten

```ts
bytesWritten: number;
```

The net number of (modelled) bytes written, i.e. max(0, absolute written bytes less deleted bytes).

***

### computeTime

```ts
computeTime: number;
```

The amount of (modelled) time spent in single-threaded compute, measured in picoseconds.

***

### readTime

```ts
readTime: number;
```

The amount of (modelled) time spent reading from disk, measured in picoseconds.
