**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / TransactionResult

# Class: TransactionResult

The result status of applying a transaction.
Includes an error message if the transaction failed, or partially failed.

## Constructors

### new TransactionResult()

```ts
private new TransactionResult(): TransactionResult
```

#### Returns

[`TransactionResult`](TransactionResult.md)

## Properties

### error?

```ts
optional readonly error: string;
```

***

### type

```ts
readonly type: "success" | "partialSuccess" | "failure";
```

## Methods

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`
