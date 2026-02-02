**@midnight-ntwrk/wallet-api v5.0.0** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/wallet-api v5.0.0](../README.md) / ApplyStage

# Type alias: ApplyStage

```ts
type ApplyStage: "FailEntirely" | "FailFallible" | "SucceedEntirely";
```

The status of the transaction

## Remarks

- FailEntirely - transaction failed and no part of it was applied
- FailFallible - the fallible part of the transaction failed, but the guaranteed part succeeded
- SucceedEntirely - transaction succeeded
