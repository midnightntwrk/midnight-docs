[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactTypeVector

# Class: CompactTypeVector\<a\>

Runtime type of the builtin `Vector` types

## Type Parameters

### a

`a`

## Implements

- [`CompactType`](../interfaces/CompactType.md)\<`a`[]\>

## Constructors

### Constructor

```ts
new CompactTypeVector<a>(length, type): CompactTypeVector<a>;
```

#### Parameters

##### length

`number`

##### type

[`CompactType`](../interfaces/CompactType.md)\<`a`\>

#### Returns

`CompactTypeVector`\<`a`\>

## Properties

### length

```ts
readonly length: number;
```

***

### type

```ts
readonly type: CompactType<a>;
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
fromValue(value): a[];
```

Converts this type's field-aligned binary representation to its TypeScript
representation destructively; (partially) consuming the input, and
ignoring superflous data for chaining.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

`a`[]

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

`a`[]

#### Returns

[`Value`](../type-aliases/Value.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`toValue`](../interfaces/CompactType.md#tovalue)
