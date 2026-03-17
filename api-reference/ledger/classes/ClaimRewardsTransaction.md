[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ClaimRewardsTransaction

# Class: ClaimRewardsTransaction\<S\>

A request to allocate rewards, authorized by the reward's recipient

## Type Parameters

### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

## Constructors

### Constructor

```ts
new ClaimRewardsTransaction<S>(
   markerS, 
   network_id, 
   value, 
   owner, 
   nonce, 
   signature, 
kind?): ClaimRewardsTransaction<S>;
```

#### Parameters

##### markerS

`S`\[`"instance"`\]

##### network\_id

`string`

##### value

`bigint`

##### owner

`string`

##### nonce

`string`

##### signature

`S`

##### kind?

[`ClaimKind`](../type-aliases/ClaimKind.md)

#### Returns

`ClaimRewardsTransaction`\<`S`\>

## Properties

### dataToSign

```ts
readonly dataToSign: Uint8Array;
```

The raw data any valid signature must be over to approve this transaction.

***

### kind

```ts
readonly kind: ClaimKind;
```

The kind of claim being made, either a `Reward` or a `CardanoBridge` claim.

***

### nonce

```ts
readonly nonce: string;
```

The rewarded coin's randomness, preventing it from colliding with other coins.

***

### owner

```ts
readonly owner: string;
```

The signing key owning this coin.

***

### signature

```ts
readonly signature: S;
```

The signature on this request.

***

### value

```ts
readonly value: bigint;
```

The rewarded coin's value, in atomic units dependent on the currency

Bounded to be a non-negative 64-bit integer

## Methods

### addSignature()

```ts
addSignature(signature): ClaimRewardsTransaction<SignatureEnabled>;
```

#### Parameters

##### signature

`string`

#### Returns

`ClaimRewardsTransaction`\<[`SignatureEnabled`](SignatureEnabled.md)\>

***

### eraseSignatures()

```ts
eraseSignatures(): ClaimRewardsTransaction<SignatureErased>;
```

#### Returns

`ClaimRewardsTransaction`\<[`SignatureErased`](SignatureErased.md)\>

***

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

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

### deserialize()

```ts
static deserialize<S>(markerS, raw): ClaimRewardsTransaction<S>;
```

#### Type Parameters

##### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

#### Parameters

##### markerS

`S`\[`"instance"`\]

##### raw

`Uint8Array`

#### Returns

`ClaimRewardsTransaction`\<`S`\>

***

### new()

```ts
static new(
   network_id, 
   value, 
   owner, 
   nonce, 
kind): ClaimRewardsTransaction<SignatureErased>;
```

#### Parameters

##### network\_id

`string`

##### value

`bigint`

##### owner

`string`

##### nonce

`string`

##### kind

[`ClaimKind`](../type-aliases/ClaimKind.md)

#### Returns

`ClaimRewardsTransaction`\<[`SignatureErased`](SignatureErased.md)\>
