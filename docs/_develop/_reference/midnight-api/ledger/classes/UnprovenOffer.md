**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / UnprovenOffer

# Class: UnprovenOffer

A [Offer](Offer.md), prior to being proven

All "shielded" information in the offer can still be extracted at this
stage!

## Constructors

### new UnprovenOffer()

```ts
new UnprovenOffer(): UnprovenOffer
```

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)

## Properties

### deltas

```ts
readonly deltas: Map<string, bigint>;
```

The value of this offer for each token type; note that this may be
negative

This is input coin values - output coin values, for value vectors

***

### inputs

```ts
readonly inputs: UnprovenInput[];
```

The inputs this offer is composed of

***

### outputs

```ts
readonly outputs: UnprovenOutput[];
```

The outputs this offer is composed of

***

### transient

```ts
readonly transient: UnprovenTransient[];
```

The transients this offer is composed of

## Methods

### merge()

```ts
merge(other): UnprovenOffer
```

Combine this offer with another

#### Parameters

• **other**: [`UnprovenOffer`](UnprovenOffer.md)

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)

***

### serialize()

```ts
serialize(netid): Uint8Array
```

#### Parameters

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw, netid): UnprovenOffer
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)

***

### fromInput()

```ts
static fromInput(
   input, 
   type_, 
   value): UnprovenOffer
```

Creates a singleton offer, from an [UnprovenInput](UnprovenInput.md) and its value
vector

#### Parameters

• **input**: [`UnprovenInput`](UnprovenInput.md)

• **type\_**: `string`

• **value**: `bigint`

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)

***

### fromOutput()

```ts
static fromOutput(
   output, 
   type_, 
   value): UnprovenOffer
```

Creates a singleton offer, from an [UnprovenOutput](UnprovenOutput.md) and its value
vector

#### Parameters

• **output**: [`UnprovenOutput`](UnprovenOutput.md)

• **type\_**: `string`

• **value**: `bigint`

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)

***

### fromTransient()

```ts
static fromTransient(transient): UnprovenOffer
```

Creates a singleton offer, from an [UnprovenTransient](UnprovenTransient.md)

#### Parameters

• **transient**: [`UnprovenTransient`](UnprovenTransient.md)

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)
