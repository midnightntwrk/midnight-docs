**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / BlockContext

# Type alias: BlockContext

```ts
type BlockContext: {
  blockHash: string;
  secondsSinceEpoch: bigint;
  secondsSinceEpochErr: number;
};
```

The context information about a block available inside the VM

## Type declaration

### blockHash

```ts
blockHash: string;
```

The hash of the block prior to this transaction, as a hex-encoded string

### secondsSinceEpoch

```ts
secondsSinceEpoch: bigint;
```

The seconds since the UNIX epoch that have elapsed

### secondsSinceEpochErr

```ts
secondsSinceEpochErr: number;
```

The maximum error on secondsSinceEpoch that should occur, as a
positive seconds value
