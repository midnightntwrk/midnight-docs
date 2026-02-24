[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / Intent

# Class: Intent\<S, P, B\>

An intent is a potentially unbalanced partial transaction, that may be
combined with other intents to form a whole.

## Type Parameters

### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

### B

`B` *extends* [`Bindingish`](../type-aliases/Bindingish.md)

## Properties

### actions

```ts
actions: ContractAction<P>[];
```

The action sequence of this intent.

#### Throws

Writing throws if `B` is [Binding](Binding.md).

***

### binding

```ts
readonly binding: B;
```

***

### dustActions

```ts
dustActions: undefined | DustActions<S, P>;
```

The DUST interactions made by this intent

#### Throws

Writing throws if `B` is [Binding](Binding.md).

***

### fallibleUnshieldedOffer

```ts
fallibleUnshieldedOffer: undefined | UnshieldedOffer<S>;
```

The UTXO inputs and outputs in the fallible section of this intent.

#### Throws

Writing throws if `B` is [Binding](Binding.md), unless the only change
is in the signature set.

***

### guaranteedUnshieldedOffer

```ts
guaranteedUnshieldedOffer: undefined | UnshieldedOffer<S>;
```

The UTXO inputs and outputs in the guaranteed section of this intent.

#### Throws

Writing throws if `B` is [Binding](Binding.md), unless the only change
is in the signature set.

***

### ttl

```ts
ttl: Date;
```

The time this intent expires.

#### Throws

Writing throws if `B` is [Binding](Binding.md).

## Methods

### addCall()

```ts
addCall(call): Intent<S, PreProof, PreBinding>;
```

Adds a contract call to this intent.

#### Parameters

##### call

[`ContractCallPrototype`](ContractCallPrototype.md)

#### Returns

`Intent`\<`S`, [`PreProof`](PreProof.md), [`PreBinding`](PreBinding.md)\>

***

### addDeploy()

```ts
addDeploy(deploy): Intent<S, PreProof, PreBinding>;
```

Adds a contract deploy to this intent.

#### Parameters

##### deploy

[`ContractDeploy`](ContractDeploy.md)

#### Returns

`Intent`\<`S`, [`PreProof`](PreProof.md), [`PreBinding`](PreBinding.md)\>

***

### addMaintenanceUpdate()

```ts
addMaintenanceUpdate(update): Intent<S, PreProof, PreBinding>;
```

Adds a maintenance update to this intent.

#### Parameters

##### update

[`MaintenanceUpdate`](MaintenanceUpdate.md)

#### Returns

`Intent`\<`S`, [`PreProof`](PreProof.md), [`PreBinding`](PreBinding.md)\>

***

### bind()

```ts
bind(segmentId): Intent<S, P, Binding>;
```

Enforces binding for this intent. This is irreversible.

#### Parameters

##### segmentId

`number`

#### Returns

`Intent`\<`S`, `P`, [`Binding`](Binding.md)\>

#### Throws

If `segmentId` is not a valid segment ID.

***

### eraseProofs()

```ts
eraseProofs(): Intent<S, NoProof, NoBinding>;
```

Removes proofs from this intent.

#### Returns

`Intent`\<`S`, [`NoProof`](NoProof.md), [`NoBinding`](NoBinding.md)\>

***

### eraseSignatures()

```ts
eraseSignatures(): Intent<SignatureErased, P, B>;
```

Removes signatures from this intent.

#### Returns

`Intent`\<[`SignatureErased`](SignatureErased.md), `P`, `B`\>

***

### intentHash()

```ts
intentHash(segmentId): string;
```

Returns the hash of this intent, for it's given segment ID.

#### Parameters

##### segmentId

`number`

#### Returns

`string`

***

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### signatureData()

```ts
signatureData(segmentId): Uint8Array;
```

The raw data that is signed for unshielded inputs in this intent.

#### Parameters

##### segmentId

`number`

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
static deserialize<S, P, B>(
   markerS, 
   markerP, 
   markerB, 
raw): Intent<S, P, B>;
```

#### Type Parameters

##### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

##### B

`B` *extends* [`Bindingish`](../type-aliases/Bindingish.md)

#### Parameters

##### markerS

`S`\[`"instance"`\]

##### markerP

`P`\[`"instance"`\]

##### markerB

`B`\[`"instance"`\]

##### raw

`Uint8Array`

#### Returns

`Intent`\<`S`, `P`, `B`\>

***

### new()

```ts
static new(ttl): UnprovenIntent;
```

#### Parameters

##### ttl

`Date`

#### Returns

[`UnprovenIntent`](../type-aliases/UnprovenIntent.md)
