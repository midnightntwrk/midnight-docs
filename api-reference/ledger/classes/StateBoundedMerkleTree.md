[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / StateBoundedMerkleTree

# Class: StateBoundedMerkleTree

Represents a fixed-depth Merkle tree storing hashed data, whose preimages
are unknown

## Constructors

### Constructor

```ts
new StateBoundedMerkleTree(height): StateBoundedMerkleTree;
```

Create a blank tree with the given height

#### Parameters

##### height

`number`

#### Returns

`StateBoundedMerkleTree`

## Properties

### height

```ts
readonly height: number;
```

## Methods

### collapse()

```ts
collapse(start, end): StateBoundedMerkleTree;
```

**`Internal`**

Erases all but necessary hashes between, and inclusive of, `start` and
`end` inidices

#### Parameters

##### start

`bigint`

##### end

`bigint`

#### Returns

`StateBoundedMerkleTree`

#### Throws

If the indices are out-of-bounds for the tree, or `end < start`

***

### findPathForLeaf()

```ts
findPathForLeaf(leaf): undefined | AlignedValue;
```

**`Internal`**

Internal implementation of the finding path primitive.
Returns undefined if the leaf is not in the tree.

#### Parameters

##### leaf

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`undefined` \| [`AlignedValue`](../type-aliases/AlignedValue.md)

***

### pathForLeaf()

```ts
pathForLeaf(index, leaf): AlignedValue;
```

**`Internal`**

Internal implementation of the path construction primitive

#### Parameters

##### index

`bigint`

##### leaf

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Throws

If the index is out-of-bounds for the tree

***

### rehash()

```ts
rehash(): StateBoundedMerkleTree;
```

Rehashes the tree, updating all internal hashes and ensuring all
node hashes are present. Necessary because the onchain runtime does
not automatically rehash trees.

#### Returns

`StateBoundedMerkleTree`

***

### root()

```ts
root(): undefined | AlignedValue;
```

**`Internal`**

Internal implementation of the merkle tree root primitive.
Returns undefined if the tree has not been fully hashed.

#### Returns

`undefined` \| [`AlignedValue`](../type-aliases/AlignedValue.md)

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

### update()

```ts
update(index, leaf): StateBoundedMerkleTree;
```

Inserts a value into the Merkle tree, returning the updated tree

#### Parameters

##### index

`bigint`

##### leaf

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`StateBoundedMerkleTree`

#### Throws

If the index is out-of-bounds for the tree
