[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactTypeCurvePoint

# Class: CompactTypeCurvePoint

Runtime type of [CurvePoint](../interfaces/CurvePoint.md)

## Implements

- [`CompactType`](../interfaces/CompactType.md)\<[`CurvePoint`](../interfaces/CurvePoint.md)\>

## Constructors

### Constructor

```ts
new CompactTypeCurvePoint(): CompactTypeCurvePoint;
```

#### Returns

`CompactTypeCurvePoint`

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
fromValue(value): CurvePoint;
```

Converts this type's field-aligned binary representation to its TypeScript
representation destructively; (partially) consuming the input, and
ignoring superflous data for chaining.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

[`CurvePoint`](../interfaces/CurvePoint.md)

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

[`CurvePoint`](../interfaces/CurvePoint.md)

#### Returns

[`Value`](../type-aliases/Value.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`toValue`](../interfaces/CompactType.md#tovalue)
