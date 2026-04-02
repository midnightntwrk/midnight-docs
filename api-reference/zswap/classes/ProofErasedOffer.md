[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / ProofErasedOffer

# Class: ProofErasedOffer

An [Offer](Offer.md), with all proof information erased

Primarily for use in testing, or handling data known to be correct from
external information

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
readonly inputs: ProofErasedInput[];
```

The inputs this offer is composed of

***

### outputs

```ts
readonly outputs: ProofErasedOutput[];
```

The outputs this offer is composed of

***

### transient

```ts
readonly transient: ProofErasedTransient[];
```

The transients this offer is composed of

## Methods

### merge()

```ts
merge(other): ProofErasedOffer
```

#### Parameters

##### other

[`ProofErasedOffer`](ProofErasedOffer.md)

#### Returns

[`ProofErasedOffer`](ProofErasedOffer.md)

***

### serialize()

```ts
serialize(netid): Uint8Array<ArrayBufferLike>
```

#### Parameters

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw, netid): ProofErasedOffer
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ProofErasedOffer`](ProofErasedOffer.md)
