[**@midnight-ntwrk/compact-runtime v0.14.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactType

# Interface: CompactType\<A\>

A runtime representation of a type in Compact

## Type Parameters

### A

`A`

## Methods

### alignment()

```ts
alignment(): Alignment;
```

The field-aligned binary alignment of this type.

#### Returns

[`Alignment`](../type-aliases/Alignment.md)

***

### fromValue()

```ts
fromValue(value): A;
```

Converts this type's field-aligned binary representation to its TypeScript
representation destructively; (partially) consuming the input, and
ignoring superflous data for chaining.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

`A`

***

### toValue()

```ts
toValue(value): Value;
```

Converts this type's TypeScript representation to its field-aligned binary
representation

#### Parameters

##### value

`A`

#### Returns

[`Value`](../type-aliases/Value.md)
