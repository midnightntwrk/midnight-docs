[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / createProvingPayload

# Function: createProvingPayload()

```ts
function createProvingPayload(
   serializedPreimage, 
   overwriteBindingInput, 
   keyMaterial?): Uint8Array;
```

Creates a payload for proving a specific proof through the proof server

## Parameters

### serializedPreimage

`Uint8Array`

### overwriteBindingInput

`undefined` | `bigint`

### keyMaterial?

[`ProvingKeyMaterial`](../type-aliases/ProvingKeyMaterial.md)

## Returns

`Uint8Array`
