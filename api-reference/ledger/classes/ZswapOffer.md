[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapOffer

# Class: ZswapOffer\<P\>

A full Zswap offer; the zswap part of a transaction

Consists of sets of [ZswapInput](ZswapInput.md)s, [ZswapOutput](ZswapOutput.md)s, and [ZswapTransient](ZswapTransient.md)s,
as well as a [deltas](#deltas) vector of the transaction value

## Type Parameters

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

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
readonly inputs: ZswapInput<P>[];
```

The inputs this offer is composed of

***

### outputs

```ts
readonly outputs: ZswapOutput<P>[];
```

The outputs this offer is composed of

***

### transients

```ts
readonly transients: ZswapTransient<P>[];
```

The transients this offer is composed of

## Methods

### merge()

```ts
merge(other): ZswapOffer<P>;
```

Combine this offer with another

#### Parameters

##### other

`ZswapOffer`\<`P`\>

#### Returns

`ZswapOffer`\<`P`\>

***

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

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

***

### deserialize()

```ts
static deserialize<P>(markerP, raw): ZswapOffer<P>;
```

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### markerP

`P`\[`"instance"`\]

##### raw

`Uint8Array`

#### Returns

`ZswapOffer`\<`P`\>

***

### fromInput()

```ts
static fromInput<P>(
   input, 
   type_?, 
value?): ZswapOffer<P>;
```

Creates a singleton offer, from an [ZswapInput](ZswapInput.md) and its value
vector

The `type_` and `value` parameters are deprecated and will be ignored.

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### input

[`ZswapInput`](ZswapInput.md)\<`P`\>

##### type\_?

`string`

##### value?

`bigint`

#### Returns

`ZswapOffer`\<`P`\>

***

### fromOutput()

```ts
static fromOutput<P>(
   output, 
   type_?, 
value?): ZswapOffer<P>;
```

Creates a singleton offer, from an [ZswapOutput](ZswapOutput.md) and its value
vector

The `type_` and `value` parameters are deprecated and will be ignored.

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### output

[`ZswapOutput`](ZswapOutput.md)\<`P`\>

##### type\_?

`string`

##### value?

`bigint`

#### Returns

`ZswapOffer`\<`P`\>

***

### fromTransient()

```ts
static fromTransient<P>(transient): ZswapOffer<P>;
```

Creates a singleton offer, from a [ZswapTransient](ZswapTransient.md)

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### transient

[`ZswapTransient`](ZswapTransient.md)\<`P`\>

#### Returns

`ZswapOffer`\<`P`\>
