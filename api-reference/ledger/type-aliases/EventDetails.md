[**@midnight/ledger v8.1.2**](../README.md)

***

[@midnight/ledger](../globals.md) / EventDetails

# Type Alias: EventDetails

```ts
type EventDetails = 
  | {
  contract: ContractAddress | undefined;
  nullifier: Nullifier;
  tag: "zswapInput";
}
  | {
  commitment: CoinCommitment;
  contract: ContractAddress | undefined;
  mtIndex: bigint;
  tag: "zswapOutput";
}
  | {
  blockTime: Date;
  generation: DustGenerationInfo;
  generationIndex: bigint;
  tag: "dustInitialUtxo";
}
  | {
  blockTime: Date;
  tag: "dustGenerationDtimeUpdate";
  update: TreeInsertionPath<DustGenerationInfo>;
}
  | {
  blockTime: Date;
  commitment: DustCommitment;
  commitmentIndex: bigint;
  declaredTime: Date;
  nullifier: DustNullifier;
  tag: "dustSpendProcessed";
  vFee: bigint;
}
  | {
  tag: string;
};
```

Details of the event emitted
