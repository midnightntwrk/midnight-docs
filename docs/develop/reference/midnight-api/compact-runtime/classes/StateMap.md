[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / StateMap

# Class: StateMap

Represents a key-value map, where keys are [AlignedValue](../type-aliases/AlignedValue.md)s, and values
are [StateValue](StateValue.md)s.

## Constructors

### Constructor

```ts
new StateMap(): StateMap;
```

#### Returns

`StateMap`

## Methods

### get()

```ts
get(key): undefined | StateValue;
```

#### Parameters

##### key

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`undefined` \| [`StateValue`](StateValue.md)

***

### insert()

```ts
insert(key, value): StateMap;
```

#### Parameters

##### key

[`AlignedValue`](../type-aliases/AlignedValue.md)

##### value

[`StateValue`](StateValue.md)

#### Returns

`StateMap`

***

### keys()

```ts
keys(): AlignedValue[];
```

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)[]

***

### remove()

```ts
remove(key): StateMap;
```

#### Parameters

##### key

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`StateMap`

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
