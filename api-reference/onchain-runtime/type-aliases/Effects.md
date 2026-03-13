[**@midnight-ntwrk/onchain-runtime v2.0.1**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / Effects

# Type Alias: Effects

```ts
type Effects: {
  claimedContractCalls: [bigint, ContractAddress, string, Fr][];
  claimedNullifiers: Nullifier[];
  claimedShieldedReceives: CoinCommitment[];
  claimedShieldedSpends: CoinCommitment[];
  claimedUnshieldedSpends: Map<[TokenType, PublicAddress], bigint>;
  shieldedMints: Map<string, bigint>;
  unshieldedInputs: Map<TokenType, bigint>;
  unshieldedMints: Map<string, bigint>;
  unshieldedOutputs: Map<TokenType, bigint>;
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

### claimedShieldedReceives

```ts
claimedShieldedReceives: CoinCommitment[];
```

The coin commitments (outputs) this contract call requires, as coins
received

### claimedShieldedSpends

```ts
claimedShieldedSpends: CoinCommitment[];
```

The coin commitments (outputs) this contract call requires, as coins
sent

### claimedUnshieldedSpends

```ts
claimedUnshieldedSpends: Map<[TokenType, PublicAddress], bigint>;
```

The unshielded UTXO outputs this contract expects to be present.

### shieldedMints

```ts
shieldedMints: Map<string, bigint>;
```

The shielded tokens minted in this call, as a map from hex-encoded 256-bit domain
separators to unsigned 64-bit integers.

### unshieldedInputs

```ts
unshieldedInputs: Map<TokenType, bigint>;
```

The unshielded inputs this contract expects.

### unshieldedMints

```ts
unshieldedMints: Map<string, bigint>;
```

The unshielded tokens minted in this call, as a map from hex-encoded 256-bit domain
separators to unsigned 64-bit integers.

### unshieldedOutputs

```ts
unshieldedOutputs: Map<TokenType, bigint>;
```

The unshielded outputs this contract authorizes.
