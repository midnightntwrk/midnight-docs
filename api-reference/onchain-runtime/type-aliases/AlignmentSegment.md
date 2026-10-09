[**@midnight-ntwrk/onchain-runtime v3.1.1**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / AlignmentSegment

# Type Alias: AlignmentSegment

```ts
type AlignmentSegment: {
  tag: "option";
  value: Alignment[];
 } | {
  tag: "atom";
  value: AlignmentAtom;
};
```

A segment in a larger [Alignment](Alignment.md).
