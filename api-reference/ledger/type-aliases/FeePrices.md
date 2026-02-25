[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / FeePrices

# Type Alias: FeePrices

```ts
type FeePrices = {
  blockUsageFactor: number;
  computeFactor: number;
  overallPrice: number;
  readFactor: number;
  writeFactor: number;
};
```

The fee prices for transaction

## Properties

### blockUsageFactor

```ts
blockUsageFactor: number;
```

The price factor of block usage.

***

### computeFactor

```ts
computeFactor: number;
```

The price factor of time spent in single-threaded compute.

***

### overallPrice

```ts
overallPrice: number;
```

The overall price of a full block in an average cost dimension.

***

### readFactor

```ts
readFactor: number;
```

The price factor of time spent reading from disk.

***

### writeFactor

```ts
writeFactor: number;
```

The price factor of time spent writing to disk.
