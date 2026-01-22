**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / ProofErasedInput

# Class: ProofErasedInput

A [Input](Input.md), with all proof information erased

Primarily for use in testing, or handling data known to be correct from
external information

## Constructors

### new ProofErasedInput()

```ts
private new ProofErasedInput(): ProofErasedInput
```

#### Returns

[`ProofErasedInput`](ProofErasedInput.md)

## Properties

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

The contract address receiving the input, if the sender is a contract

***

### nullifier

```ts
readonly nullifier: string;
```

The nullifier of the input

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
static deserialize(raw, netid): ProofErasedInput
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ProofErasedInput`](ProofErasedInput.md)
