[**@midnight-ntwrk/onchain-runtime v2.0.0-rc.2**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / EncodedStateValue

# Type Alias: EncodedStateValue

```ts
type EncodedStateValue: 
  | {
  tag: "null";
 }
  | {
  content: AlignedValue;
  tag: "cell";
 }
  | {
  content: Map<AlignedValue, EncodedStateValue>;
  tag: "map";
 }
  | {
  content: EncodedStateValue[];
  tag: "array";
 }
  | {
  content: [number, Map<bigint, [Uint8Array, undefined]>];
  tag: "boundedMerkleTree";
};
```

An alternative encoding of [StateValue](../classes/StateValue.md) for use in [Op](Op.md) for
technical reasons
