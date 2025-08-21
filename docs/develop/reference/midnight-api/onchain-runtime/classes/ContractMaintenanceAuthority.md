**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / ContractMaintenanceAuthority

# Class: ContractMaintenanceAuthority

A committee permitted to make changes to this contract. If a threshold of
the public keys in this committee sign off, they can change the rules of
this contract, or recompile it for a new version.

If the threshold is greater than the number of committee members, it is
impossible for them to sign anything.

## Constructors

### new ContractMaintenanceAuthority(committee, threshold, counter)

```ts
new ContractMaintenanceAuthority(
   committee, 
   threshold, 
   counter?): ContractMaintenanceAuthority
```

Constructs a new authority from its components

If not supplied, `counter` will default to `0n`. Values should be
non-negative, and at most 2^32 - 1.

At deployment, `counter` must be `0n`, and any subsequent update should
set counter to exactly one greater than the current value.

#### Parameters

• **committee**: `string`[]

• **threshold**: `number`

• **counter?**: `bigint`

#### Returns

[`ContractMaintenanceAuthority`](ContractMaintenanceAuthority.md)

## Properties

### committee

```ts
readonly committee: string[];
```

The committee public keys

***

### counter

```ts
readonly counter: bigint;
```

The replay protection counter

***

### threshold

```ts
readonly threshold: number;
```

How many keys must sign rule changes

## Methods

### serialize()

```ts
serialize(networkid): Uint8Array
```

#### Parameters

• **networkid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`

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
