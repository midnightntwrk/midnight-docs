**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / ContractCallPrototype

# Class: ContractCallPrototype

A [ContractCall](ContractCall.md) still being assembled

## Constructors

### new ContractCallPrototype(address, entry_point, op, guaranteed_public_transcript, fallible_public_transcript, private_transcript_outputs, input, output, communication_commitment_rand, key_location)

```ts
new ContractCallPrototype(
   address, 
   entry_point, 
   op, 
   guaranteed_public_transcript, 
   fallible_public_transcript, 
   private_transcript_outputs, 
   input, 
   output, 
   communication_commitment_rand, 
   key_location): ContractCallPrototype
```

#### Parameters

• **address**: `string`

The address being called

• **entry\_point**: `string` \| `Uint8Array`

The entry point being called

• **op**: [`ContractOperation`](ContractOperation.md)

The operation expected at this entry point

• **guaranteed\_public\_transcript**: `undefined` \| [`Transcript`](../type-aliases/Transcript.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>

The guaranteed transcript computed
for this call

• **fallible\_public\_transcript**: `undefined` \| [`Transcript`](../type-aliases/Transcript.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>

The fallible transcript computed for
this call

• **private\_transcript\_outputs**: [`AlignedValue`](../type-aliases/AlignedValue.md)[]

The private transcript recorded for
this call

• **input**: [`AlignedValue`](../type-aliases/AlignedValue.md)

The input(s) provided to this call

• **output**: [`AlignedValue`](../type-aliases/AlignedValue.md)

The output(s) computed from this call

• **communication\_commitment\_rand**: `string`

The communication randomness used
for this call

• **key\_location**: `string`

An identifier for how the key for this call may be
looked up

#### Returns

[`ContractCallPrototype`](ContractCallPrototype.md)

## Methods

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`
