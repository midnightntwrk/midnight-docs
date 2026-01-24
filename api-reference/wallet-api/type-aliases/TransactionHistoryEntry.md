**@midnight-ntwrk/wallet-api v5.0.0** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/wallet-api v5.0.0](../README.md) / TransactionHistoryEntry

# Type alias: TransactionHistoryEntry

```ts
type TransactionHistoryEntry: {
  applyStage: ApplyStage;
  deltas: Record<TokenType, bigint>;
  identifiers: TransactionIdentifier[];
  transaction: Transaction;
  transactionHash: TransactionHash;
};
```

Transaction history data

## Type declaration

### applyStage

```ts
readonly applyStage: ApplyStage;
```

[ApplyStage](ApplyStage.md) of the transaction

### deltas

```ts
readonly deltas: Record<TokenType, bigint>;
```

The value of this offer for each token type

#### Remarks

It contains the input coin values - output coin values, for value vectors of the transaction.
Note that this will not list any zero value coins;

### identifiers

```ts
readonly identifiers: TransactionIdentifier[];
```

An array of [TransactionIdentifier](TransactionIdentifier.md) of the transaction.

### transaction

```ts
readonly transaction: Transaction;
```

Original transaction

### transactionHash

```ts
readonly transactionHash: TransactionHash;
```

[TransactionHash](TransactionHash.md) of the transaction
