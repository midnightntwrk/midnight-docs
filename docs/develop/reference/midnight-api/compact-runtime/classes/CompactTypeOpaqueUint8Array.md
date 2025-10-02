[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactTypeOpaqueUint8Array

# Class: CompactTypeOpaqueUint8Array

Runtime type of `Opaque["Uint8Array"]`

## Implements

- [`CompactType`](../interfaces/CompactType.md)\<`Uint8Array`\>

## Constructors

### Constructor

```ts
new CompactTypeOpaqueUint8Array(): CompactTypeOpaqueUint8Array;
```

#### Returns

`CompactTypeOpaqueUint8Array`

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
fromValue(value): Uint8Array;
```

Converts this type's field-aligned binary representation to its TypeScript
representation destructively; (partially) consuming the input, and
ignoring superflous data for chaining.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

`Uint8Array`

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

`Uint8Array`

#### Returns

[`Value`](../type-aliases/Value.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`toValue`](../interfaces/CompactType.md#tovalue)
