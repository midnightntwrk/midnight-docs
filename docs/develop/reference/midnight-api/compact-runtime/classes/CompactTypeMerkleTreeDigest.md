[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactTypeMerkleTreeDigest

# Class: CompactTypeMerkleTreeDigest

Runtime type of [MerkleTreeDigest](../interfaces/MerkleTreeDigest.md)

## Implements

- [`CompactType`](../interfaces/CompactType.md)\<[`MerkleTreeDigest`](../interfaces/MerkleTreeDigest.md)\>

## Constructors

### Constructor

```ts
new CompactTypeMerkleTreeDigest(): CompactTypeMerkleTreeDigest;
```

#### Returns

`CompactTypeMerkleTreeDigest`

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
fromValue(value): MerkleTreeDigest;
```

Converts this type's field-aligned binary representation to its TypeScript
representation destructively; (partially) consuming the input, and
ignoring superflous data for chaining.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

[`MerkleTreeDigest`](../interfaces/MerkleTreeDigest.md)

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

[`MerkleTreeDigest`](../interfaces/MerkleTreeDigest.md)

#### Returns

[`Value`](../type-aliases/Value.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`toValue`](../interfaces/CompactType.md#tovalue)
