**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / GatherResult

# Type alias: GatherResult

```ts
type GatherResult: {
  content: AlignedValue;
  tag: "read";
  } | {
  content: EncodedStateValue;
  tag: "log";
};
```

An individual result of observing the results of a non-verifying VM program
execution
