[**@midnight/ledger v8.1.2**](../README.md)

***

[@midnight/ledger](../globals.md) / DustStateMerkleTreeCollapsedUpdate

# Class: DustStateMerkleTreeCollapsedUpdate

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
static deserialize(raw): DustStateMerkleTreeCollapsedUpdate;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`DustStateMerkleTreeCollapsedUpdate`

***

### newFromCommitmentTree()

```ts
static newFromCommitmentTree(
   state, 
   start, 
   end): DustStateMerkleTreeCollapsedUpdate;
```

#### Parameters

##### state

[`DustUtxoState`](DustUtxoState.md)

##### start

`bigint`

##### end

`bigint`

#### Returns

`DustStateMerkleTreeCollapsedUpdate`

***

### newFromGenerationTree()

```ts
static newFromGenerationTree(
   state, 
   start, 
   end): DustStateMerkleTreeCollapsedUpdate;
```

#### Parameters

##### state

[`DustGenerationState`](DustGenerationState.md)

##### start

`bigint`

##### end

`bigint`

#### Returns

`DustStateMerkleTreeCollapsedUpdate`
