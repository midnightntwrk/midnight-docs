**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / Effects

# Type alias: Effects

```ts
type Effects: {
  claimedContractCalls: [bigint, ContractAddress, string, Fr][];
  claimedNullifiers: Nullifier[];
  claimedReceives: CoinCommitment[];
  claimedSpends: CoinCommitment[];
  mints: Map<string, bigint>;
};
```

The contract-external effects of a transcript.

## Type declaration

### claimedContractCalls

```ts
claimedContractCalls: [bigint, ContractAddress, string, Fr][];
```

The contracts called from this contract. The values are, in order:

- The sequence number of this call
- The contract being called
- The entry point being called
- The communications commitment

### claimedNullifiers

```ts
claimedNullifiers: Nullifier[];
```

The nullifiers (spends) this contract call requires

### claimedReceives

```ts
claimedReceives: CoinCommitment[];
```

The coin commitments (outputs) this contract call requires, as coins
received

### claimedSpends

```ts
claimedSpends: CoinCommitment[];
```

The coin commitments (outputs) this contract call requires, as coins
sent

### mints

```ts
mints: Map<string, bigint>;
```

The tokens minted in this call, as a map from hex-encoded 256-bit domain
separators to non-negative 64-bit integers.
