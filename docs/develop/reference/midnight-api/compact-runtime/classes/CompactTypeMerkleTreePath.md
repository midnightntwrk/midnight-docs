[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactTypeMerkleTreePath

# Class: CompactTypeMerkleTreePath\<a\>

Runtime type of [MerkleTreePath](../interfaces/MerkleTreePath.md)

## Type Parameters

### a

`a`

## Implements

- [`CompactType`](../interfaces/CompactType.md)\<[`MerkleTreePath`](../interfaces/MerkleTreePath.md)\<`a`\>\>

## Constructors

### Constructor

```ts
new CompactTypeMerkleTreePath<a>(n, leaf): CompactTypeMerkleTreePath<a>;
```

#### Parameters

##### n

`number`

##### leaf

[`CompactType`](../interfaces/CompactType.md)\<`a`\>

#### Returns

`CompactTypeMerkleTreePath`\<`a`\>

## Properties

### leaf

```ts
readonly leaf: CompactType<a>;
```

***

### path

```ts
readonly path: CompactTypeVector<MerkleTreePathEntry>;
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
fromValue(value): MerkleTreePath<a>;
```

Converts this type's field-aligned binary representation to its TypeScript
representation destructively; (partially) consuming the input, and
ignoring superflous data for chaining.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

[`MerkleTreePath`](../interfaces/MerkleTreePath.md)\<`a`\>

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

[`MerkleTreePath`](../interfaces/MerkleTreePath.md)\<`a`\>

#### Returns

[`Value`](../type-aliases/Value.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`toValue`](../interfaces/CompactType.md#tovalue)
