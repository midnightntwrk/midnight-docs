**@midnight-ntwrk/wallet-api v5.0.0** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/wallet-api v5.0.0](../README.md) / TransactionToProve

# Type alias: TransactionToProve

```ts
type TransactionToProve: {
  transaction: UnprovenTransaction;
  type: typeof TRANSACTION_TO_PROVE;
};
```

Transaction data for proving

## Remarks

TransactionToProve is a data structure used for proving the unproven transaction.

## Type declaration

### transaction

```ts
readonly transaction: UnprovenTransaction;
```

Unproven transaction which needs to be proven.

### type

```ts
readonly type: typeof TRANSACTION_TO_PROVE;
```

Used to identify the transaction type
