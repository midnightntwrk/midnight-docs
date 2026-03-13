[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / PrePartitionContractCall

# Class: PrePartitionContractCall

A [ContractCall](ContractCall.md) prior to being partitioned into guarnateed and
fallible parts, for use with [Transaction.addCalls](Transaction.md#addcalls).

Note that this is similar, but not the same as [ContractCall](ContractCall.md), which
assumes [partitionTranscripts](../functions/partitionTranscripts.md) was already used. [Transaction.addCalls](Transaction.md#addcalls) is a replacement for this that also handles
Zswap components, and creates relevant intents when needed.

## Constructors

### Constructor

```ts
new PrePartitionContractCall(
   address, 
   entry_point, 
   op, 
   pre_transcript, 
   private_transcript_outputs, 
   input, 
   output, 
   communication_commitment_rand, 
   key_location): PrePartitionContractCall;
```

#### Parameters

##### address

`string`

##### entry\_point

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### op

[`ContractOperation`](ContractOperation.md)

##### pre\_transcript

[`PreTranscript`](PreTranscript.md)

##### private\_transcript\_outputs

[`AlignedValue`](../type-aliases/AlignedValue.md)[]

##### input

[`AlignedValue`](../type-aliases/AlignedValue.md)

##### output

[`AlignedValue`](../type-aliases/AlignedValue.md)

##### communication\_commitment\_rand

`string`

##### key\_location

`string`

#### Returns

`PrePartitionContractCall`

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
