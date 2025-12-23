[**@midnight-ntwrk/compact-runtime v0.11.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactTypeVector

# Class: CompactTypeVector\<A\>

Runtime type of the builtin `Vector` types

## Type Parameters

### A

`A`

## Implements

- [`CompactType`](../interfaces/CompactType.md)\<`A`[]\>

## Constructors

### Constructor

```ts
new CompactTypeVector<A>(length, type): CompactTypeVector<A>;
```

#### Parameters

##### length

`number`

##### type

[`CompactType`](../interfaces/CompactType.md)\<`A`\>

#### Returns

`CompactTypeVector`\<`A`\>

## Properties

### length

```ts
readonly length: number;
```

***

### type

```ts
readonly type: CompactType<A>;
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
fromValue(value): A[];
```

Converts this type's field-aligned binary representation to its TypeScript
representation destructively; (partially) consuming the input, and
ignoring superflous data for chaining.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

`A`[]

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

`A`[]

#### Returns

[`Value`](../type-aliases/Value.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`toValue`](../interfaces/CompactType.md#tovalue)
