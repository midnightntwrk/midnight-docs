[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactTypeUnsignedInteger

# Class: CompactTypeUnsignedInteger

Runtime type of the builtin `Unsigned Integer` types

## Implements

- [`CompactType`](../interfaces/CompactType.md)\<`bigint`\>

## Constructors

### Constructor

```ts
new CompactTypeUnsignedInteger(maxValue, length): CompactTypeUnsignedInteger;
```

#### Parameters

##### maxValue

`bigint`

##### length

`number`

#### Returns

`CompactTypeUnsignedInteger`

## Properties

### length

```ts
readonly length: number;
```

***

### maxValue

```ts
readonly maxValue: bigint;
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
fromValue(value): bigint;
```

Converts this type's field-aligned binary representation to its TypeScript
representation destructively; (partially) consuming the input, and
ignoring superflous data for chaining.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

`bigint`

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

`bigint`

#### Returns

[`Value`](../type-aliases/Value.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`toValue`](../interfaces/CompactType.md#tovalue)
