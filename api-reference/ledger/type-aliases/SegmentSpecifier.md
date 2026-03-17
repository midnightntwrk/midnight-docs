[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / SegmentSpecifier

# Type Alias: SegmentSpecifier

```ts
type SegmentSpecifier = 
  | {
  tag: "first";
}
  | {
  tag: "guaranteedOnly";
}
  | {
  tag: "random";
}
  | {
  tag: "specific";
  value: number;
};
```

Specifies where something should execute in a transaction.

Options are:
- As the first thing (alias for `{ tag: 'specific', value: 1 }`)
- In any physical segment, but only utilising the guaranteed logical segment
- In a random segment (ideal for merging with other intents)
- In a specific directly provided segment (in the range 1..65535)
