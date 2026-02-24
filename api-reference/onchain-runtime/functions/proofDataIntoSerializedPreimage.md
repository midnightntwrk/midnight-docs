[**@midnight-ntwrk/onchain-runtime v2.0.0-rc.2**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / proofDataIntoSerializedPreimage

# Function: proofDataIntoSerializedPreimage()

```ts
function proofDataIntoSerializedPreimage(
   input, 
   output, 
   public_transcript, 
   private_transcript_outputs, 
   key_location?): Uint8Array
```

Converts input, output, and transcript information into a proof preimage
suitable to pass to a `ProvingProvider`.

The `key_location` parameter is a string used to identify the circuit by
proving machinery, for backwards-compatibility, if unset it defaults to
`'dummy'`.

## Parameters

### input

[`AlignedValue`](../type-aliases/AlignedValue.md)

### output

[`AlignedValue`](../type-aliases/AlignedValue.md)

### public\_transcript

[`Op`](../type-aliases/Op.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>[]

### private\_transcript\_outputs

[`AlignedValue`](../type-aliases/AlignedValue.md)[]

### key\_location?

`string`

## Returns

`Uint8Array`
