[**@midnight-ntwrk/onchain-runtime v2.0.1**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / AlignmentAtom

# Type Alias: AlignmentAtom

```ts
type AlignmentAtom: {
  tag: "compress";
 } | {
  tag: "field";
 } | {
  length: number;
  tag: "bytes";
};
```

A atom in a larger [Alignment](Alignment.md).
