[**@midnight-ntwrk/compact-runtime v0.8.1**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / AlignmentAtom

# Type Alias: AlignmentAtom

```ts
type AlignmentAtom = 
  | {
  tag: "compress";
}
  | {
  tag: "field";
}
  | {
  length: number;
  tag: "bytes";
};
```

A atom in a larger [Alignment](Alignment.md).
