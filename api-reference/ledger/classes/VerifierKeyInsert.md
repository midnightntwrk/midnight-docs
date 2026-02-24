[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / VerifierKeyInsert

# Class: VerifierKeyInsert

An update instruction to insert a verifier key at a specific operation and
version.

## Constructors

### Constructor

```ts
new VerifierKeyInsert(operation, vk): VerifierKeyInsert;
```

#### Parameters

##### operation

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### vk

[`ContractOperationVersionedVerifierKey`](ContractOperationVersionedVerifierKey.md)

#### Returns

`VerifierKeyInsert`

## Properties

### operation

```ts
readonly operation: string | Uint8Array<ArrayBufferLike>;
```

***

### vk

```ts
readonly vk: ContractOperationVersionedVerifierKey;
```

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
