[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / Key

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
