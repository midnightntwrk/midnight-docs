[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / BlockContext

# Type Alias: BlockContext

```ts
type BlockContext = {
  blockHash: string;
  secondsSinceEpoch: bigint;
  secondsSinceEpochErr: number;
};
```

The context information about a block available inside the VM

## Properties

### blockHash

```ts
blockHash: string;
```

The hash of the block prior to this transaction, as a hex-encoded string

***

### secondsSinceEpoch

```ts
secondsSinceEpoch: bigint;
```

The seconds since the UNIX epoch that have elapsed

***

### secondsSinceEpochErr

```ts
secondsSinceEpochErr: number;
```

The maximum error on [secondsSinceEpoch](#secondssinceepoch) that should occur, as a
positive seconds value
