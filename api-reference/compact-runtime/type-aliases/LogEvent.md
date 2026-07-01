[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / LogEvent

# Type Alias: LogEvent

```ts
type LogEvent = Extract<GatherResult, {
  tag: "log";
}>["content"] & {
  address: ContractAddress;
};
```

A `GatherResult` narrowed to log emissions, tagged with the address of the contract
that emitted it; `content` is the encoded `VersionedLogItem` array.

## Type Declaration

### address

```ts
address: ContractAddress;
```
