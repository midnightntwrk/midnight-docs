**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / AlignmentSegment

# Type alias: AlignmentSegment

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
