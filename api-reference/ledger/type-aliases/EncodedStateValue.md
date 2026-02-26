[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / EncodedStateValue

# Type Alias: EncodedStateValue

```ts
type EncodedStateValue = 
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
