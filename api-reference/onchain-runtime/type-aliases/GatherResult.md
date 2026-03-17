[**@midnight-ntwrk/onchain-runtime v2.0.1**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / GatherResult

# Type Alias: GatherResult

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
