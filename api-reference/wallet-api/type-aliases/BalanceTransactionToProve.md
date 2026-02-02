**@midnight-ntwrk/wallet-api v5.0.0** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/wallet-api v5.0.0](../README.md) / BalanceTransactionToProve

# Type alias: BalanceTransactionToProve

```ts
type BalanceTransactionToProve: {
  transactionToBalance: Transaction;
  transactionToProve: UnprovenTransaction;
  type: typeof BALANCE_TRANSACTION_TO_PROVE;
};
```

Balance transaction data for proving

## Remarks

BalanceTransactionToProve is a data structure used for proving the unproven transaction (transactionToProve)
and merging it with the original transaction (transactionToBalance)

## Type declaration

### transactionToBalance

```ts
readonly transactionToBalance: Transaction;
```

Transaction which will be merged with proved `transactionToProve`.
It is a original transaction which we want to balance.

### transactionToProve

```ts
readonly transactionToProve: UnprovenTransaction;
```

Unproven transaction which needs to be proven.
Transaction which will balance the `transactionToBalance`

### type

```ts
readonly type: typeof BALANCE_TRANSACTION_TO_PROVE;
```

Used to identify the transaction type
