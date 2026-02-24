[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ContractCallPrototype

# Class: ContractCallPrototype

A [ContractCall](ContractCall.md) still being assembled

## Constructors

### Constructor

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
   key_location): ContractCallPrototype;
```

#### Parameters

##### address

`string`

The address being called

##### entry\_point

The entry point being called

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### op

[`ContractOperation`](ContractOperation.md)

The operation expected at this entry point

##### guaranteed\_public\_transcript

The guaranteed transcript computed
for this call

`undefined` | [`Transcript`](../type-aliases/Transcript.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>

##### fallible\_public\_transcript

The fallible transcript computed for
this call

`undefined` | [`Transcript`](../type-aliases/Transcript.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>

##### private\_transcript\_outputs

[`AlignedValue`](../type-aliases/AlignedValue.md)[]

The private transcript recorded for
this call

##### input

[`AlignedValue`](../type-aliases/AlignedValue.md)

The input(s) provided to this call

##### output

[`AlignedValue`](../type-aliases/AlignedValue.md)

The output(s) computed from this call

##### communication\_commitment\_rand

`string`

The communication randomness used
for this call

##### key\_location

`string`

An identifier for how the key for this call may be
looked up

#### Returns

`ContractCallPrototype`

## Methods

### intoCall()

```ts
intoCall(parentBinding): ContractCall<PreProof>;
```

#### Parameters

##### parentBinding

[`PreBinding`](PreBinding.md)

#### Returns

[`ContractCall`](ContractCall.md)\<[`PreProof`](PreProof.md)\>

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
