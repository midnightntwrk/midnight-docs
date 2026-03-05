[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / MerkleTreeCollapsedUpdate

# Class: MerkleTreeCollapsedUpdate

A compact delta on the coin commitments Merkle tree, used to keep local
spending trees in sync with the global state without requiring receiving all
transactions.

## Constructors

### Constructor

```ts
new MerkleTreeCollapsedUpdate(
   state, 
   start, 
   end): MerkleTreeCollapsedUpdate;
```

Create a new compact update from a non-compact state, and inclusive
`start` and `end` indices

#### Parameters

##### state

[`ZswapChainState`](ZswapChainState.md)

##### start

`bigint`

##### end

`bigint`

#### Returns

`MerkleTreeCollapsedUpdate`

#### Throws

If the indices are out-of-bounds for the state, or `end < start`

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
static deserialize(raw): MerkleTreeCollapsedUpdate;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`MerkleTreeCollapsedUpdate`
