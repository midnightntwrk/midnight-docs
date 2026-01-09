[**@midnight-ntwrk/compact-runtime v0.14.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactTypeMerkleTreePath

# Class: CompactTypeMerkleTreePath\<A\>

Runtime type of [MerkleTreePath](../interfaces/MerkleTreePath.md)

## Type Parameters

### A

`A`

## Implements

- [`CompactType`](../interfaces/CompactType.md)\<[`MerkleTreePath`](../interfaces/MerkleTreePath.md)\<`A`\>\>

## Constructors

### Constructor

```ts
new CompactTypeMerkleTreePath<A>(n, leaf): CompactTypeMerkleTreePath<A>;
```

#### Parameters

##### n

`number`

##### leaf

[`CompactType`](../interfaces/CompactType.md)\<`A`\>

#### Returns

`CompactTypeMerkleTreePath`\<`A`\>

## Properties

### leaf

```ts
readonly leaf: CompactType<A>;
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
fromValue(value): MerkleTreePath<A>;
```

Converts this type's field-aligned binary representation to its TypeScript
representation destructively; (partially) consuming the input, and
ignoring superflous data for chaining.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

[`MerkleTreePath`](../interfaces/MerkleTreePath.md)\<`A`\>

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

[`MerkleTreePath`](../interfaces/MerkleTreePath.md)\<`A`\>

#### Returns

[`Value`](../type-aliases/Value.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`toValue`](../interfaces/CompactType.md#tovalue)
