**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / ContractCallsPrototype

# Class: ContractCallsPrototype

An atomic collection of [ContractAction](../type-aliases/ContractAction.md)s, which may interact
with each other

## Constructors

### new ContractCallsPrototype()

```ts
new ContractCallsPrototype(): ContractCallsPrototype
```

#### Returns

[`ContractCallsPrototype`](ContractCallsPrototype.md)

## Methods

### addCall()

```ts
addCall(call): ContractCallsPrototype
```

#### Parameters

• **call**: [`ContractCallPrototype`](ContractCallPrototype.md)

#### Returns

[`ContractCallsPrototype`](ContractCallsPrototype.md)

***

### addDeploy()

```ts
addDeploy(deploy): ContractCallsPrototype
```

#### Parameters

• **deploy**: [`ContractDeploy`](ContractDeploy.md)

#### Returns

[`ContractCallsPrototype`](ContractCallsPrototype.md)

***

### addMaintenanceUpdate()

```ts
addMaintenanceUpdate(upd): ContractCallsPrototype
```

#### Parameters

• **upd**: [`MaintenanceUpdate`](MaintenanceUpdate.md)

#### Returns

[`ContractCallsPrototype`](ContractCallsPrototype.md)

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`
