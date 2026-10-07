[**@midnight/ledger v8.1.2**](../README.md)

***

[@midnight/ledger](../globals.md) / ContractCall

# Class: ContractCall\<P\>

A single contract call segment

## Type Parameters

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

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
readonly entryPoint: string | Uint8Array<ArrayBufferLike>;
```

The entry point being called

***

### fallibleTranscript

```ts
readonly fallibleTranscript: 
  | Transcript<AlignedValue>
  | undefined;
```

The fallible execution stage transcript

***

### guaranteedTranscript

```ts
readonly guaranteedTranscript: 
  | Transcript<AlignedValue>
  | undefined;
```

The guaranteed execution stage transcript

***

### proof

```ts
readonly proof: P;
```

The proof attached to this call

## Methods

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
