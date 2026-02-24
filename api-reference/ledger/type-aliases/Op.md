**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / Op

# Type alias: Op\<R\>

```ts
type Op<R>: 
  | {
  noop: {
     n: number;
  };
  }
  | "lt"
  | "eq"
  | "type"
  | "size"
  | "new"
  | "and"
  | "or"
  | "neg"
  | "log"
  | "root"
  | "pop"
  | {
  popeq: {
     cached: boolean;
     result: R;
  };
  }
  | {
  addi: {
     immediate: number;
  };
  }
  | {
  subi: {
     immediate: number;
  };
  }
  | {
  push: {
     storage: boolean;
     value: EncodedStateValue;
  };
  }
  | {
  branch: {
     skip: number;
  };
  }
  | {
  jmp: {
     skip: number;
  };
  }
  | "add"
  | "sub"
  | {
  concat: {
     cached: boolean;
     n: number;
  };
  }
  | "member"
  | {
  rem: {
     cached: boolean;
  };
  }
  | {
  dup: {
     n: number;
  };
  }
  | {
  swap: {
     n: number;
  };
  }
  | {
  idx: {
     cached: boolean;
     path: Key[];
     pushPath: boolean;
  };
  }
  | {
  ins: {
     cached: boolean;
     n: number;
  };
  }
  | "ckpt";
```

An individual operation in the onchain VM

## Type parameters

• **R**

`null` or [AlignedValue](AlignedValue.md), for gathering and verifying
mode respectively
