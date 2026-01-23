**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / VerifierKeyRemove

# Class: VerifierKeyRemove

An update instruction to remove a verifier key of a specific operation and
version.

## Constructors

### new VerifierKeyRemove(operation, version)

```ts
new VerifierKeyRemove(operation, version): VerifierKeyRemove
```

#### Parameters

• **operation**: `string` \| `Uint8Array`

• **version**: [`ContractOperationVersion`](ContractOperationVersion.md)

#### Returns

[`VerifierKeyRemove`](VerifierKeyRemove.md)

## Properties

### operation

```ts
readonly operation: string | Uint8Array;
```

***

### version

```ts
readonly version: ContractOperationVersion;
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
