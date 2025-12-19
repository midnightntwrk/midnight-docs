**@midnight-ntwrk/wallet-api v5.0.0** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/wallet-api v5.0.0](../README.md) / SyncLag

# Type alias: SyncLag

```ts
type SyncLag: {
  applyGap: bigint;
  sourceGap: bigint;
};
```

Lag of the wallet syncing process.

## Type declaration

### applyGap

```ts
readonly applyGap: bigint;
```

Blocks your wallet still needs to process, if this is greater than 0, it means that your wallet is not fully synced
Formula: backend tip - last transaction index processed by your wallet

### sourceGap

```ts
readonly sourceGap: bigint;
```

Blocks the backend still needs to process, if this is greater than 0, it means that the backend is not fully synced
Formula: chain tip - backend tip
