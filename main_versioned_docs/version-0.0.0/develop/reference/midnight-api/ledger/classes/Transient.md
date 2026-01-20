**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / Transient

# Class: Transient

A shielded "transient"; an output that is immediately spent within the same
transaction

## Constructors

### new Transient()

```ts
private new Transient(): Transient
```

#### Returns

[`Transient`](Transient.md)

## Properties

### commitment

```ts
readonly commitment: string;
```

The commitment of the transient

***

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

The contract address creating the transient, if applicable

***

### nullifier

```ts
readonly nullifier: string;
```

The nullifier of the transient

## Methods

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
static deserialize(raw, netid): Transient
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`Transient`](Transient.md)
