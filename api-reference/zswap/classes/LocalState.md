**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / LocalState

# Class: LocalState

The local state of a user/wallet, consisting of their secret key, and a set
of unspent coins.

It also keeps track of coins that are in-flight, either expecting to spend
or expecting to receive, and a local copy of the global coin commitment
Merkle tree to generate proofs against.

## Constructors

### new LocalState()

```ts
new LocalState(): LocalState
```

Creates a new state with a randomly sampled secret key

#### Returns

[`LocalState`](LocalState.md)

## Properties

### coinPublicKey

```ts
readonly coinPublicKey: string;
```

The coin public key of this wallet

***

### coins

```ts
readonly coins: Set<QualifiedCoinInfo>;
```

The set of *spendable* coins of this wallet

***

### encryptionPublicKey

```ts
readonly encryptionPublicKey: string;
```

The encryption public key of this wallet

***

### firstFree

```ts
readonly firstFree: bigint;
```

The first free index in the internal coin commitments Merkle tree.
This may be used to identify which merkle tree updates are necessary.

***

### pendingOutputs

```ts
readonly pendingOutputs: Map<string, CoinInfo>;
```

The outputs that this wallet is expecting to receive in the future

***

### pendingSpends

```ts
readonly pendingSpends: Map<string, QualifiedCoinInfo>;
```

The spends that this wallet is expecting to be finalized on-chain in the
future

## Methods

### apply()

```ts
apply(offer): LocalState
```

Locally applies an offer to the current state, returning the updated state

#### Parameters

• **offer**: [`Offer`](Offer.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyCollapsedUpdate()

```ts
applyCollapsedUpdate(update): LocalState
```

Applies a collapsed Merkle tree update to the current local state, fast
forwarding through the indices included in it, if it is a correct update.

The general flow for usage if Alice is in state A, and wants to ask Bob how to reach the new state B, is:
 - Find where she left off – what's her firstFree?
 - Find out where she's going – ask for Bob's firstFree.
 - Find what contents she does care about – ask Bob for the filtered
   entries she want to include proper in her tree.
 - In order, of Merkle tree indicies:
   - Insert (with `apply` offers Alice cares about).
   - Skip (with this method) sections Alice does not care about, obtaining
     the collapsed update covering the gap from Bob.
Note that `firstFree` is not included in the tree itself, and both ends of
updates *are* included.

#### Parameters

• **update**: [`MerkleTreeCollapsedUpdate`](MerkleTreeCollapsedUpdate.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyFailed()

```ts
applyFailed(offer): LocalState
```

Locally marks an offer as failed, allowing inputs used in it to be
spendable once more.

#### Parameters

• **offer**: [`Offer`](Offer.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyFailedProofErased()

```ts
applyFailedProofErased(offer): LocalState
```

Locally marks an proof-erased offer as failed, allowing inputs used in it
to be spendable once more.

#### Parameters

• **offer**: [`ProofErasedOffer`](ProofErasedOffer.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyProofErased()

```ts
applyProofErased(offer): LocalState
```

Locally applies a proof-erased offer to the current state, returning the
updated state

#### Parameters

• **offer**: [`ProofErasedOffer`](ProofErasedOffer.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyProofErasedTx()

```ts
applyProofErasedTx(tx, res): LocalState
```

Locally applies a proof-erased transaction to the current state, returning
the updated state

#### Parameters

• **tx**: [`ProofErasedTransaction`](ProofErasedTransaction.md)

• **res**: `"success"` \| `"partialSuccess"` \| `"failure"`

The result type of applying this transaction against the
ledger state

#### Returns

[`LocalState`](LocalState.md)

***

### applySystemTx()

```ts
applySystemTx(tx): LocalState
```

Locally applies a system transaction to the current state, returning the
updated state

#### Parameters

• **tx**: [`SystemTransaction`](SystemTransaction.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyTx()

```ts
applyTx(tx, res): LocalState
```

Locally applies a transaction to the current state, returning the updated
state

#### Parameters

• **tx**: [`Transaction`](Transaction.md)

• **res**: `"success"` \| `"partialSuccess"` \| `"failure"`

The result type of applying this transaction against the
ledger state

#### Returns

[`LocalState`](LocalState.md)

***

### serialize()

```ts
serialize(netid): Uint8Array
```

#### Parameters

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`

***

### spend()

```ts
spend(coin): [LocalState, UnprovenInput]
```

Initiates a new spend of a specific coin, outputting the corresponding
[UnprovenInput](UnprovenInput.md), and the updated state marking this coin as
in-flight.

#### Parameters

• **coin**: [`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

#### Returns

[[`LocalState`](LocalState.md), [`UnprovenInput`](UnprovenInput.md)]

***

### spendFromOutput()

```ts
spendFromOutput(coin, output): [LocalState, UnprovenTransient]
```

Initiates a new spend of a new-yet-received output, outputting the
corresponding [UnprovenTransient](UnprovenTransient.md), and the updated state marking
this coin as in-flight.

#### Parameters

• **coin**: [`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

• **output**: [`UnprovenOutput`](UnprovenOutput.md)

#### Returns

[[`LocalState`](LocalState.md), [`UnprovenTransient`](UnprovenTransient.md)]

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`

***

### watchFor()

```ts
watchFor(coin): LocalState
```

Adds a coin to the list of coins that are expected to be received

This should be used if an output is creating a coin for this wallet, which
does not contain a ciphertext to detect it. In this case, the wallet must
know the commitment ahead of time to notice the receipt.

#### Parameters

• **coin**: [`CoinInfo`](../type-aliases/CoinInfo.md)

#### Returns

[`LocalState`](LocalState.md)

***

### yesIKnowTheSecurityImplicationsOfThis\_encryptionSecretKey()

```ts
yesIKnowTheSecurityImplicationsOfThis_encryptionSecretKey(): EncryptionSecretKey
```

#### Returns

[`EncryptionSecretKey`](EncryptionSecretKey.md)

***

### deserialize()

```ts
static deserialize(raw, netid): LocalState
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`LocalState`](LocalState.md)

***

### fromSeed()

```ts
static fromSeed(seed): LocalState
```

Creates a new state from a predefined random seed (which can act as a
recovery phrase)

#### Parameters

• **seed**: `Uint8Array`

#### Returns

[`LocalState`](LocalState.md)
