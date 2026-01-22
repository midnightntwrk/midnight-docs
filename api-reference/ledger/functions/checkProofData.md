**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / checkProofData

# Function: checkProofData()

`Internal`

```ts
checkProofData(
   zkir, 
   input, 
   output, 
   public_transcript, 
   private_transcript_outputs): void
```

Internal implementation of proof dry runs.

## Parameters

• **zkir**: `string`

• **input**: [`AlignedValue`](../type-aliases/AlignedValue.md)

• **output**: [`AlignedValue`](../type-aliases/AlignedValue.md)

• **public\_transcript**: [`Op`](../type-aliases/Op.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>[]

• **private\_transcript\_outputs**: [`AlignedValue`](../type-aliases/AlignedValue.md)[]

## Returns

`void`

## Throws

If the proof would not hold
