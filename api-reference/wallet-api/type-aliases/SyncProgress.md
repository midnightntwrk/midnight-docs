**@midnight-ntwrk/wallet-api v5.0.0** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/wallet-api v5.0.0](../README.md) / SyncProgress

# Type alias: SyncProgress

```ts
type SyncProgress: {
  lag: SyncLag;
  synced: boolean;
};
```

Sync progress of the wallet

## Type declaration

### lag

```ts
lag: SyncLag;
```

Lag of the wallet syncing process

### synced

```ts
synced: boolean;
```

SyncLag.indexer === 0 && SyncLag.wallet === 0
