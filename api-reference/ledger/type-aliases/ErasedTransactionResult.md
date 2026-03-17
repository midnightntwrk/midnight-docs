[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ErasedTransactionResult

# Type Alias: ErasedTransactionResult

```ts
type ErasedTransactionResult = {
  successfulSegments?: Map<number, boolean>;
  type: "success" | "partialSuccess" | "failure";
};
```

The result status of applying a transaction, without error message

## Properties

### successfulSegments?

```ts
optional successfulSegments: Map<number, boolean>;
```

***

### type

```ts
type: "success" | "partialSuccess" | "failure";
```
