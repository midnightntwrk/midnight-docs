**@midnight-ntwrk/wallet-api v5.0.0** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/wallet-api v5.0.0](../README.md) / NothingToProve

# Type alias: NothingToProve

```ts
type NothingToProve: {
  transaction: Transaction;
  type: typeof NOTHING_TO_PROVE;
};
```

No-Op transaction data for proving

## Remarks

balanceTransaction API allows passing already balanced and proved transaction.

NothingToProve is designed to mark this special case and can be passed further to proveTransaction endpoint
without a risk of executing unnecessary proving process,
and without disturbing transaction flow with supporting special cases

## Type declaration

### transaction

```ts
readonly transaction: Transaction;
```

Original transaction

### type

```ts
readonly type: typeof NOTHING_TO_PROVE;
```

Used to identify the transaction type
