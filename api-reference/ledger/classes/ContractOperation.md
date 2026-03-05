[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ContractOperation

# Class: ContractOperation

An individual operation, or entry point of a contract, consisting primarily
of a ZK verifier keys, potentially for different versions of the proving
system.

Only the latest available version is exposed to this API.

Note that the serialized form of the key is checked on initialization

## Constructors

### Constructor

```ts
new ContractOperation(): ContractOperation;
```

#### Returns

`ContractOperation`

## Properties

### verifierKey

```ts
verifierKey: Uint8Array;
```

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
static deserialize(raw): ContractOperation;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`ContractOperation`
