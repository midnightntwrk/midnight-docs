**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / ContractState

# Class: ContractState

The state of a contract, consisting primarily of the [data](ContractState.md#data) accessible
directly to the contract, and the map of [ContractOperation](ContractOperation.md)s that can
be called on it, the keys of which can be accessed with [operations](ContractState.md#operations),
and the individual operations can be read with [operation](ContractState.md#operation) and written
to with [setOperation](ContractState.md#setoperation).

## Constructors

### new ContractState()

```ts
new ContractState(): ContractState
```

Creates a blank contract state

#### Returns

[`ContractState`](ContractState.md)

## Properties

### data

```ts
data: StateValue;
```

The current value of the primary state of the contract

***

### maintenanceAuthority

```ts
maintenanceAuthority: ContractMaintenanceAuthority;
```

The maintenance authority associated with this contract

## Methods

### operation()

```ts
operation(operation): undefined | ContractOperation
```

Get the operation at a specific entry point name

#### Parameters

• **operation**: `string` \| `Uint8Array`

#### Returns

`undefined` \| [`ContractOperation`](ContractOperation.md)

***

### operations()

```ts
operations(): (string | Uint8Array)[]
```

Return a list of the entry points currently registered on this contract

#### Returns

(`string` \| `Uint8Array`)[]

***

### query()

```ts
query(query, cost_model): GatherResult[]
```

Runs a series of operations against the current state, and returns the
results

#### Parameters

• **query**: [`Op`](../type-aliases/Op.md)\<`null`\>[]

• **cost\_model**: [`CostModel`](CostModel.md)

#### Returns

[`GatherResult`](../type-aliases/GatherResult.md)[]

***

### serialize()

```ts
serialize(networkid): Uint8Array
```

#### Parameters

• **networkid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`

***

### setOperation()

```ts
setOperation(operation, value): void
```

Set a specific entry point name to contain a given operation

#### Parameters

• **operation**: `string` \| `Uint8Array`

• **value**: [`ContractOperation`](ContractOperation.md)

#### Returns

`void`

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw, networkid): ContractState
```

#### Parameters

• **raw**: `Uint8Array`

• **networkid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ContractState`](ContractState.md)
