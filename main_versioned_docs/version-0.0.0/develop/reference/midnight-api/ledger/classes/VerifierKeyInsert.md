**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / VerifierKeyInsert

# Class: VerifierKeyInsert

An update instruction to insert a verifier key at a specific operation and
version.

## Constructors

### new VerifierKeyInsert(operation, vk)

```ts
new VerifierKeyInsert(operation, vk): VerifierKeyInsert
```

#### Parameters

• **operation**: `string` \| `Uint8Array`

• **vk**: [`ContractOperationVersionedVerifierKey`](ContractOperationVersionedVerifierKey.md)

#### Returns

[`VerifierKeyInsert`](VerifierKeyInsert.md)

## Properties

### operation

```ts
readonly operation: string | Uint8Array;
```

***

### vk

```ts
readonly vk: ContractOperationVersionedVerifierKey;
```

## Methods

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`
