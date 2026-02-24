[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / QueryResults

# Class: QueryResults

The results of making a query against a specific state or context

## Properties

### context

```ts
readonly context: QueryContext;
```

The context state after executing the query. This can be used to execute
further queries

***

### events

```ts
readonly events: GatherResult[];
```

Any events/results that occurred during or from the query

***

### gasCost

```ts
readonly gasCost: RunningCost;
```

The measured cost of executing the query

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
