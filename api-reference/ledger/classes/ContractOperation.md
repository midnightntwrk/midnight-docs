**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / ContractOperation

# Class: ContractOperation

An individual operation, or entry point of a contract, consisting primarily
of a ZK verifier keys, potentially for different versions of the proving
system.

Only the latest available version is exposed to this API.

Note that the serialized form of the key is checked on initialization

## Constructors

### new ContractOperation()

```ts
new ContractOperation(): ContractOperation
```

#### Returns

[`ContractOperation`](ContractOperation.md)

## Properties

### verifierKey

```ts
verifierKey: Uint8Array;
```

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
static deserialize(raw, networkid): ContractOperation
```

#### Parameters

• **raw**: `Uint8Array`

• **networkid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ContractOperation`](ContractOperation.md)
