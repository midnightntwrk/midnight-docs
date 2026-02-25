[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / UnshieldedOffer

# Class: UnshieldedOffer\<S\>

An unshielded offer consists of inputs, outputs, and signatures that
authorize the inputs. The data the signatures sign is provided by [Intent.signatureData](Intent.md#signaturedata).

## Type Parameters

### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

## Properties

### inputs

```ts
readonly inputs: UtxoSpend[];
```

***

### outputs

```ts
readonly outputs: UtxoOutput[];
```

***

### signatures

```ts
readonly signatures: string[];
```

## Methods

### addSignatures()

```ts
addSignatures(signatures): UnshieldedOffer<S>;
```

#### Parameters

##### signatures

`string`[]

#### Returns

`UnshieldedOffer`\<`S`\>

***

### eraseSignatures()

```ts
eraseSignatures(): UnshieldedOffer<SignatureErased>;
```

#### Returns

`UnshieldedOffer`\<[`SignatureErased`](SignatureErased.md)\>

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

***

### new()

```ts
static new(
   inputs, 
   outputs, 
signatures): UnshieldedOffer<SignatureEnabled>;
```

#### Parameters

##### inputs

[`UtxoSpend`](../type-aliases/UtxoSpend.md)[]

##### outputs

[`UtxoOutput`](../type-aliases/UtxoOutput.md)[]

##### signatures

`string`[]

#### Returns

`UnshieldedOffer`\<[`SignatureEnabled`](SignatureEnabled.md)\>
