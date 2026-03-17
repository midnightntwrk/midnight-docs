[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / LocalState

# Class: LocalState

The local state of a user/wallet, consisting of a set
of unspent coins

It also keeps track of coins that are in-flight, either expecting to spend
or expecting to receive, and a local copy of the global coin commitment
Merkle tree to generate proofs against.

## Constructors

### new LocalState()

```ts
new LocalState(): LocalState
```

Creates a new, empty state

#### Returns

[`LocalState`](LocalState.md)

## Properties

### coins

```ts
readonly coins: Set<QualifiedCoinInfo>;
```

The set of *spendable* coins of this wallet

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
apply(secretKeys, offer): LocalState
```

Locally applies an offer to the current state, returning the updated state

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### offer

[`Offer`](Offer.md)

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
 - In order, of Merkle tree indices:
   - Insert (with `apply` offers Alice cares about).
   - Skip (with this method) sections Alice does not care about, obtaining
     the collapsed update covering the gap from Bob.
Note that `firstFree` is not included in the tree itself, and both ends of
updates *are* included.

#### Parameters

##### update

[`MerkleTreeCollapsedUpdate`](MerkleTreeCollapsedUpdate.md)

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

##### offer

[`Offer`](Offer.md)

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

##### offer

[`ProofErasedOffer`](ProofErasedOffer.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyProofErased()

```ts
applyProofErased(secretKeys, offer): LocalState
```

Locally applies a proof-erased offer to the current state, returning the
updated state

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### offer

[`ProofErasedOffer`](ProofErasedOffer.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyProofErasedTx()

```ts
applyProofErasedTx(
   secretKeys, 
   tx, 
   res): LocalState
```

Locally applies a proof-erased transaction to the current state, returning
the updated state

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### tx

[`ProofErasedTransaction`](ProofErasedTransaction.md)

##### res

The result type of applying this transaction against the
ledger state

`"success"` | `"partialSuccess"` | `"failure"`

#### Returns

[`LocalState`](LocalState.md)

***

### applySystemTx()

```ts
applySystemTx(secretKeys, tx): LocalState
```

Locally applies a system transaction to the current state, returning the
updated state

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### tx

[`SystemTransaction`](SystemTransaction.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyTx()

```ts
applyTx(
   secretKeys, 
   tx, 
   res): LocalState
```

Locally applies a transaction to the current state, returning the updated
state

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### tx

[`Transaction`](Transaction.md)

##### res

The result type of applying this transaction against the
ledger state

`"success"` | `"partialSuccess"` | `"failure"`

#### Returns

[`LocalState`](LocalState.md)

***

### serialize()

```ts
serialize(netid): Uint8Array<ArrayBufferLike>
```

#### Parameters

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### spend()

```ts
spend(
   secretKeys, 
   coin, 
   segment): [LocalState, UnprovenInput]
```

Initiates a new spend of a specific coin, outputting the corresponding
[UnprovenInput](UnprovenInput.md), and the updated state marking this coin as
in-flight.

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### coin

[`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

##### segment

`number`

#### Returns

[[`LocalState`](LocalState.md), [`UnprovenInput`](UnprovenInput.md)]

***

### spendFromOutput()

```ts
spendFromOutput(
   secretKeys, 
   coin, 
   segment, 
   output): [LocalState, UnprovenTransient]
```

Initiates a new spend of a new-yet-received output, outputting the
corresponding [UnprovenTransient](UnprovenTransient.md), and the updated state marking
this coin as in-flight.

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### coin

[`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

##### segment

`number`

##### output

[`UnprovenOutput`](UnprovenOutput.md)

#### Returns

[[`LocalState`](LocalState.md), [`UnprovenTransient`](UnprovenTransient.md)]

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### watchFor()

```ts
watchFor(coinPublicKey, coin): LocalState
```

Adds a coin to the list of coins that are expected to be received

This should be used if an output is creating a coin for this wallet, which
does not contain a ciphertext to detect it. In this case, the wallet must
know the commitment ahead of time to notice the receipt.

#### Parameters

##### coinPublicKey

`string`

##### coin

[`CoinInfo`](../type-aliases/CoinInfo.md)

#### Returns

[`LocalState`](LocalState.md)

***

### deserialize()

```ts
static deserialize(raw, netid): LocalState
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`LocalState`](LocalState.md)
