[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / QueryResults

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
readonly gasCost: bigint;
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
