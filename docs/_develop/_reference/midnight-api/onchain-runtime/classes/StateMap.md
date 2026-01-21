**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / StateMap

# Class: StateMap

Represents a key-value map, where keys are [AlignedValue](../type-aliases/AlignedValue.md)s, and values
are [StateValue](StateValue.md)s.

## Constructors

### new StateMap()

```ts
new StateMap(): StateMap
```

#### Returns

[`StateMap`](StateMap.md)

## Methods

### get()

```ts
get(key): undefined | StateValue
```

#### Parameters

• **key**: [`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`undefined` \| [`StateValue`](StateValue.md)

***

### insert()

```ts
insert(key, value): StateMap
```

#### Parameters

• **key**: [`AlignedValue`](../type-aliases/AlignedValue.md)

• **value**: [`StateValue`](StateValue.md)

#### Returns

[`StateMap`](StateMap.md)

***

### keys()

```ts
keys(): AlignedValue[]
```

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)[]

***

### remove()

```ts
remove(key): StateMap
```

#### Parameters

• **key**: [`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`StateMap`](StateMap.md)

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`
