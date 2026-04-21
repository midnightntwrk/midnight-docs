[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / AlignmentAtom

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
