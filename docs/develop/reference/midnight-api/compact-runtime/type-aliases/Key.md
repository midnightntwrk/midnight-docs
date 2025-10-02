[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / Key

# Type Alias: Key

```ts
type Key = 
  | {
  tag: "value";
  value: AlignedValue;
}
  | {
  tag: "stack";
};
```

A key used to index into an array or map in the onchain VM
