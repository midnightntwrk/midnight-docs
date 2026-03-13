[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapLocalState

# Class: ZswapLocalState

The local state of a user/wallet, consisting of a set
of unspent coins

It also keeps track of coins that are in-flight, either expecting to spend
or expecting to receive, and a local copy of the global coin commitment
Merkle tree to generate proofs against.

It does not store keys internally, but accepts them as arguments to various operations.

## Constructors

### Constructor

```ts
new ZswapLocalState(): ZswapLocalState;
```

Creates a new, empty state

#### Returns

`ZswapLocalState`

## Properties

### coins

```ts
readonly coins: Set<QualifiedShieldedCoinInfo>;
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
readonly pendingOutputs: Map<string, [ShieldedCoinInfo, undefined | Date]>;
```

The outputs that this wallet is expecting to receive in the future, with
an optional TTL attached.

***

### pendingSpends

```ts
readonly pendingSpends: Map<string, [QualifiedShieldedCoinInfo, undefined | Date]>;
```

The spends that this wallet is expecting to be finalized on-chain in the
future. Each has an optional TTL attached.

## Methods

### apply()

```ts
apply<P>(secretKeys, offer): ZswapLocalState;
```

Locally applies an offer to the current state, returning the updated state

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### secretKeys

[`ZswapSecretKeys`](ZswapSecretKeys.md)

##### offer

[`ZswapOffer`](ZswapOffer.md)\<`P`\>

#### Returns

`ZswapLocalState`

***

### applyCollapsedUpdate()

```ts
applyCollapsedUpdate(update): ZswapLocalState;
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

`ZswapLocalState`

***

### clearPending()

```ts
clearPending(time): ZswapLocalState;
```

Clears pending outputs / spends that have passed their TTL without being included in
a block.

Note that as TTLs are *from a block perspective*, and there is some
latency between the block and the wallet, the time passed in here should
not be the current time, but incorporate a latency buffer.

#### Parameters

##### time

`Date`

#### Returns

`ZswapLocalState`

***

### replayEvents()

```ts
replayEvents(secretKeys, events): ZswapLocalState;
```

Replays observed events against the current local state. These *must* be replayed
in the same order as emitted by the chain being followed.

#### Parameters

##### secretKeys

[`ZswapSecretKeys`](ZswapSecretKeys.md)

##### events

[`Event`](Event.md)[]

#### Returns

`ZswapLocalState`

***

### replayEventsWithChanges()

```ts
replayEventsWithChanges(secretKeys, events): ZswapLocalStateWithChanges;
```

Replays observed events against the current local state, returning both the updated state
and the state changes. These *must* be replayed in the same order as emitted by the chain being followed.

#### Parameters

##### secretKeys

[`ZswapSecretKeys`](ZswapSecretKeys.md)

##### events

[`Event`](Event.md)[]

#### Returns

[`ZswapLocalStateWithChanges`](ZswapLocalStateWithChanges.md)

***

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### spend()

```ts
spend(
   secretKeys, 
   coin, 
   segment, 
   ttl?): [ZswapLocalState, UnprovenInput];
```

Initiates a new spend of a specific coin, outputting the corresponding
[ZswapInput](ZswapInput.md), and the updated state marking this coin as
in-flight.

#### Parameters

##### secretKeys

[`ZswapSecretKeys`](ZswapSecretKeys.md)

##### coin

[`QualifiedShieldedCoinInfo`](../type-aliases/QualifiedShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### ttl?

`Date`

#### Returns

\[`ZswapLocalState`, [`UnprovenInput`](../type-aliases/UnprovenInput.md)\]

***

### spendFromOutput()

```ts
spendFromOutput(
   secretKeys, 
   coin, 
   segment, 
   output, 
   ttl?): [ZswapLocalState, UnprovenTransient];
```

Initiates a new spend of a new-yet-received output, outputting the
corresponding [ZswapTransient](ZswapTransient.md), and the updated state marking
this coin as in-flight.

#### Parameters

##### secretKeys

[`ZswapSecretKeys`](ZswapSecretKeys.md)

##### coin

[`QualifiedShieldedCoinInfo`](../type-aliases/QualifiedShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### output

[`UnprovenOutput`](../type-aliases/UnprovenOutput.md)

##### ttl?

`Date`

#### Returns

\[`ZswapLocalState`, [`UnprovenTransient`](../type-aliases/UnprovenTransient.md)\]

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

### watchFor()

```ts
watchFor(coinPublicKey, coin): ZswapLocalState;
```

Adds a coin to the list of coins that are expected to be received

This should be used if an output is creating a coin for this wallet, which
does not contain a ciphertext to detect it. In this case, the wallet must
know the commitment ahead of time to notice the receipt.

#### Parameters

##### coinPublicKey

`string`

##### coin

[`ShieldedCoinInfo`](../type-aliases/ShieldedCoinInfo.md)

#### Returns

`ZswapLocalState`

***

### deserialize()

```ts
static deserialize(raw): ZswapLocalState;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`ZswapLocalState`
