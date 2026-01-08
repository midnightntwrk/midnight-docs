**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / StateValue

# Class: StateValue

Represents the core of a contract's state, and recursively represents each
of its components.

There are different *classes* of state values:
- `null`
- Cells of [AlignedValue](../type-aliases/AlignedValue.md)s
- Maps from [AlignedValue](../type-aliases/AlignedValue.md)s to state values
- Bounded Merkle trees containing [AlignedValue](../type-aliases/AlignedValue.md) leaves
- Short (\<= 15 element) arrays of state values

State values are *immutable*, any operations that mutate states will return
a new state instead.

## Constructors

### new StateValue()

```ts
private new StateValue(): StateValue
```

#### Returns

[`StateValue`](StateValue.md)

## Methods

### arrayPush()

```ts
arrayPush(value): StateValue
```

#### Parameters

• **value**: [`StateValue`](StateValue.md)

#### Returns

[`StateValue`](StateValue.md)

***

### asArray()

```ts
asArray(): undefined | StateValue[]
```

#### Returns

`undefined` \| [`StateValue`](StateValue.md)[]

***

### asBoundedMerkleTree()

```ts
asBoundedMerkleTree(): undefined | StateBoundedMerkleTree
```

#### Returns

`undefined` \| [`StateBoundedMerkleTree`](StateBoundedMerkleTree.md)

***

### asCell()

```ts
asCell(): AlignedValue
```

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)

***

### asMap()

```ts
asMap(): undefined | StateMap
```

#### Returns

`undefined` \| [`StateMap`](StateMap.md)

***

### encode()

`Internal`

```ts
encode(): EncodedStateValue
```

#### Returns

[`EncodedStateValue`](../type-aliases/EncodedStateValue.md)

***

### logSize()

```ts
logSize(): number
```

#### Returns

`number`

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

### type()

```ts
type(): 
  | "map"
  | "null"
  | "cell"
  | "array"
  | "boundedMerkleTree"
```

#### Returns

  \| `"map"`
  \| `"null"`
  \| `"cell"`
  \| `"array"`
  \| `"boundedMerkleTree"`

***

### decode()

`Internal`

```ts
static decode(value): StateValue
```

#### Parameters

• **value**: [`EncodedStateValue`](../type-aliases/EncodedStateValue.md)

#### Returns

[`StateValue`](StateValue.md)

***

### newArray()

```ts
static newArray(): StateValue
```

#### Returns

[`StateValue`](StateValue.md)

***

### newBoundedMerkleTree()

```ts
static newBoundedMerkleTree(tree): StateValue
```

#### Parameters

• **tree**: [`StateBoundedMerkleTree`](StateBoundedMerkleTree.md)

#### Returns

[`StateValue`](StateValue.md)

***

### newCell()

```ts
static newCell(value): StateValue
```

#### Parameters

• **value**: [`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`StateValue`](StateValue.md)

***

### newMap()

```ts
static newMap(map): StateValue
```

#### Parameters

• **map**: [`StateMap`](StateMap.md)

#### Returns

[`StateValue`](StateValue.md)

***

### newNull()

```ts
static newNull(): StateValue
```

#### Returns

[`StateValue`](StateValue.md)
