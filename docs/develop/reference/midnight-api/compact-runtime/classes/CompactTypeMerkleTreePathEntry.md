[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactTypeMerkleTreePathEntry

# Class: CompactTypeMerkleTreePathEntry

Runtime type of [MerkleTreePathEntry](../interfaces/MerkleTreePathEntry.md)

## Implements

- [`CompactType`](../interfaces/CompactType.md)\<[`MerkleTreePathEntry`](../interfaces/MerkleTreePathEntry.md)\>

## Constructors

### Constructor

```ts
new CompactTypeMerkleTreePathEntry(): CompactTypeMerkleTreePathEntry;
```

#### Returns

`CompactTypeMerkleTreePathEntry`

## Properties

### bool

```ts
readonly bool: CompactTypeBoolean;
```

***

### digest

```ts
readonly digest: CompactTypeMerkleTreeDigest;
```

## Methods

### alignment()

```ts
alignment(): Alignment;
```

The field-aligned binary alignment of this type.

#### Returns

[`Alignment`](../type-aliases/Alignment.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`alignment`](../interfaces/CompactType.md#alignment)

***

### fromValue()

```ts
fromValue(value): MerkleTreePathEntry;
```

Converts this type's field-aligned binary representation to its TypeScript
representation destructively; (partially) consuming the input, and
ignoring superflous data for chaining.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

[`MerkleTreePathEntry`](../interfaces/MerkleTreePathEntry.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`fromValue`](../interfaces/CompactType.md#fromvalue)

***

### toValue()

```ts
toValue(value): Value;
```

Converts this type's TypeScript representation to its field-aligned binary
representation

#### Parameters

##### value

[`MerkleTreePathEntry`](../interfaces/MerkleTreePathEntry.md)

#### Returns

[`Value`](../type-aliases/Value.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`toValue`](../interfaces/CompactType.md#tovalue)
