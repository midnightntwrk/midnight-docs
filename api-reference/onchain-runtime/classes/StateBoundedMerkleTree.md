**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / StateBoundedMerkleTree

# Class: StateBoundedMerkleTree

Represents a fixed-depth Merkle tree storing hashed data, whose preimages
are unknown

## Constructors

### new StateBoundedMerkleTree(height)

```ts
new StateBoundedMerkleTree(height): StateBoundedMerkleTree
```

Create a blank tree with the given height

#### Parameters

• **height**: `number`

#### Returns

[`StateBoundedMerkleTree`](StateBoundedMerkleTree.md)

## Properties

### height

```ts
readonly height: number;
```

## Methods

### collapse()

`Internal`

```ts
collapse(start, end): StateBoundedMerkleTree
```

Erases all but necessary hashes between, and inclusive of, `start` and
`end` inidices

#### Parameters

• **start**: `bigint`

• **end**: `bigint`

#### Returns

[`StateBoundedMerkleTree`](StateBoundedMerkleTree.md)

#### Throws

If the indices are out-of-bounds for the tree, or `end < start`

***

### findPathForLeaf()

`Internal`

```ts
findPathForLeaf(leaf): AlignedValue
```

Internal implementation of the finding path primitive

#### Parameters

• **leaf**: [`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Throws

If the leaf is not in the tree

***

### pathForLeaf()

`Internal`

```ts
pathForLeaf(index, leaf): AlignedValue
```

Internal implementation of the path construction primitive

#### Parameters

• **index**: `bigint`

• **leaf**: [`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Throws

If the index is out-of-bounds for the tree

***

### root()

`Internal`

```ts
root(): Value
```

Internal implementation of the merkle tree root primitive

#### Returns

[`Value`](../type-aliases/Value.md)

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

### update()

```ts
update(index, leaf): StateBoundedMerkleTree
```

Inserts a value into the Merkle tree, returning the updated tree

#### Parameters

• **index**: `bigint`

• **leaf**: [`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`StateBoundedMerkleTree`](StateBoundedMerkleTree.md)

#### Throws

If the index is out-of-bounds for the tree
