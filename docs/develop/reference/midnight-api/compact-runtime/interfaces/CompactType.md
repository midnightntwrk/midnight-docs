[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactType

# Interface: CompactType\<a\>

A runtime representation of a type in Compact

## Type Parameters

### a

`a`

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
fromValue(value): a;
```

Converts this type's field-aligned binary representation to its TypeScript
representation destructively; (partially) consuming the input, and
ignoring superflous data for chaining.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

`a`

***

### toValue()

```ts
toValue(value): Value;
```

Converts this type's TypeScript representation to its field-aligned binary
representation

#### Parameters

##### value

`a`

#### Returns

[`Value`](../type-aliases/Value.md)
