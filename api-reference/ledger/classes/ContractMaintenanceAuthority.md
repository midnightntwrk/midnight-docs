[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ContractMaintenanceAuthority

# Class: ContractMaintenanceAuthority

A committee permitted to make changes to this contract. If a threshold of
the public keys in this committee sign off, they can change the rules of
this contract, or recompile it for a new version.

If the threshold is greater than the number of committee members, it is
impossible for them to sign anything.

## Constructors

### Constructor

```ts
new ContractMaintenanceAuthority(
   committee, 
   threshold, 
   counter?): ContractMaintenanceAuthority;
```

Constructs a new authority from its components

If not supplied, `counter` will default to `0n`. Values should be
non-negative, and at most 2^32 - 1.

At deployment, `counter` must be `0n`, and any subsequent update should
set counter to exactly one greater than the current value.

#### Parameters

##### committee

`string`[]

##### threshold

`number`

##### counter?

`bigint`

#### Returns

`ContractMaintenanceAuthority`

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
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw): ContractState;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

[`ContractState`](ContractState.md)
