**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / ContractCall

# Class: ContractCall

A single contract call segment

## Constructors

### new ContractCall()

```ts
private new ContractCall(): ContractCall
```

#### Returns

[`ContractCall`](ContractCall.md)

## Properties

### address

```ts
readonly address: string;
```

The address being called

***

### communicationCommitment

```ts
readonly communicationCommitment: string;
```

The communication commitment of this call

***

### entryPoint

```ts
readonly entryPoint: string | Uint8Array;
```

The entry point being called

***

### fallibleTranscript

```ts
readonly fallibleTranscript: undefined | Transcript<AlignedValue>;
```

The fallible execution stage transcript

***

### guaranteedTranscript

```ts
readonly guaranteedTranscript: undefined | Transcript<AlignedValue>;
```

The guaranteed execution stage transcript

## Methods

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`
