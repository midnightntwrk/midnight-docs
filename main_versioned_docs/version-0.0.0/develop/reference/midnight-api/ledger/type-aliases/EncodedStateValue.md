**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / EncodedStateValue

# Type alias: EncodedStateValue

```ts
type EncodedStateValue: 
  | {
  tag: "null";
  }
  | {
  content: EncodedStateValue;
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
