**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / MaintenanceUpdate

# Class: MaintenanceUpdate

A contract maintenance update, updating associated operations, or
changing the maintenance authority.

## Constructors

### new MaintenanceUpdate(address, updates, counter)

```ts
new MaintenanceUpdate(
   address, 
   updates, 
   counter): MaintenanceUpdate
```

#### Parameters

• **address**: `string`

• **updates**: [`SingleUpdate`](../type-aliases/SingleUpdate.md)[]

• **counter**: `bigint`

#### Returns

[`MaintenanceUpdate`](MaintenanceUpdate.md)

## Properties

### address

```ts
readonly address: string;
```

The address this deployment will attempt to create

***

### counter

```ts
readonly counter: bigint;
```

The counter this update is valid against

***

### dataToSign

```ts
readonly dataToSign: Uint8Array;
```

The raw data any valid signature must be over to approve this update.

***

### signatures

```ts
readonly signatures: [bigint, string][];
```

The signatures on this update

***

### updates

```ts
readonly updates: SingleUpdate[];
```

The updates to carry out

## Methods

### addSignature()

```ts
addSignature(idx, signature): MaintenanceUpdate
```

Adds a new signature to this update

#### Parameters

• **idx**: `bigint`

• **signature**: `string`

#### Returns

[`MaintenanceUpdate`](MaintenanceUpdate.md)

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`
