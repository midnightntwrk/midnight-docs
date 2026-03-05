[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / TransactionResult

# Class: TransactionResult

The result status of applying a transaction.
Includes an error message if the transaction failed, or partially failed.

## Properties

### error?

```ts
readonly optional error: string;
```

***

### events

```ts
readonly events: Event[];
```

***

### successfulSegments?

```ts
readonly optional successfulSegments: Map<number, boolean>;
```

***

### type

```ts
readonly type: "success" | "partialSuccess" | "failure";
```

## Methods

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
