[**@midnight-ntwrk/compact-runtime v0.14.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / StateValue

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

## Methods

### arrayPush()

```ts
arrayPush(value): StateValue;
```

#### Parameters

##### value

`StateValue`

#### Returns

`StateValue`

***

### asArray()

```ts
asArray(): StateValue[] | undefined;
```

#### Returns

`StateValue`[] \| `undefined`

***

### asBoundedMerkleTree()

```ts
asBoundedMerkleTree(): StateBoundedMerkleTree | undefined;
```

#### Returns

[`StateBoundedMerkleTree`](StateBoundedMerkleTree.md) \| `undefined`

***

### asCell()

```ts
asCell(): AlignedValue;
```

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)

***

### asMap()

```ts
asMap(): StateMap | undefined;
```

#### Returns

[`StateMap`](StateMap.md) \| `undefined`

***

### encode()

```ts
encode(): EncodedStateValue;
```

**`Internal`**

#### Returns

[`EncodedStateValue`](../type-aliases/EncodedStateValue.md)

***

### logSize()

```ts
logSize(): number;
```

#### Returns

`number`

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

### type()

```ts
type(): "cell" | "map" | "array" | "null" | "boundedMerkleTree";
```

#### Returns

`"cell"` \| `"map"` \| `"array"` \| `"null"` \| `"boundedMerkleTree"`

***

### decode()

```ts
static decode(value): StateValue;
```

**`Internal`**

#### Parameters

##### value

[`EncodedStateValue`](../type-aliases/EncodedStateValue.md)

#### Returns

`StateValue`

***

### newArray()

```ts
static newArray(): StateValue;
```

#### Returns

`StateValue`

***

### newBoundedMerkleTree()

```ts
static newBoundedMerkleTree(tree): StateValue;
```

#### Parameters

##### tree

[`StateBoundedMerkleTree`](StateBoundedMerkleTree.md)

#### Returns

`StateValue`

***

### newCell()

```ts
static newCell(value): StateValue;
```

#### Parameters

##### value

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`StateValue`

***

### newMap()

```ts
static newMap(map): StateValue;
```

#### Parameters

##### map

[`StateMap`](StateMap.md)

#### Returns

`StateValue`

***

### newNull()

```ts
static newNull(): StateValue;
```

#### Returns

`StateValue`
