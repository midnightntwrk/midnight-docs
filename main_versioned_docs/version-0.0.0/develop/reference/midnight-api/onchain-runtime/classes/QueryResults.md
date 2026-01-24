**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / QueryResults

# Class: QueryResults

The results of making a query against a specific state or context

## Constructors

### new QueryResults()

```ts
private new QueryResults(): QueryResults
```

#### Returns

[`QueryResults`](QueryResults.md)

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
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`
