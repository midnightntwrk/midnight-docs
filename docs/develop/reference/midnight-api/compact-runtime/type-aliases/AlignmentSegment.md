[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / AlignmentSegment

# Type Alias: AlignmentSegment

```ts
type AlignmentSegment = 
  | {
  tag: "option";
  value: Alignment[];
}
  | {
  tag: "atom";
  value: AlignmentAtom;
};
```

A segment in a larger [Alignment](Alignment.md).
