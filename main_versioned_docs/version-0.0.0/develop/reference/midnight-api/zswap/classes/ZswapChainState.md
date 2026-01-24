**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / ZswapChainState

# Class: ZswapChainState

The on-chain state of Zswap, consisting of a Merkle tree of coin
commitments, a set of nullifiers, an index into the Merkle tree, and a set
of valid past Merkle tree roots

## Constructors

### new ZswapChainState()

```ts
new ZswapChainState(): ZswapChainState
```

#### Returns

[`ZswapChainState`](ZswapChainState.md)

## Properties

### firstFree

```ts
readonly firstFree: bigint;
```

The first free index in the coin commitment tree

## Methods

### serialize()

```ts
serialize(netid): Uint8Array
```

#### Parameters

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`

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

### tryApply()

```ts
tryApply(offer, whitelist?): [ZswapChainState, Map<string, bigint>]
```

Try to apply an [Offer](Offer.md) to the state, returning the updated state
and a map on newly inserted coin commitments to their inserted indices.

#### Parameters

• **offer**: [`Offer`](Offer.md)

• **whitelist?**: `Set`\<`string`\>

A set of contract addresses that are of interest. If
set, *only* these addresses are tracked, and all other information is
discarded.

#### Returns

[[`ZswapChainState`](ZswapChainState.md), `Map`\<`string`, `bigint`\>]

***

### tryApplyProofErased()

```ts
tryApplyProofErased(offer, whitelist?): [ZswapChainState, Map<string, bigint>]
```

[tryApply](ZswapChainState.md#tryapply) for [ProofErasedOffer](ProofErasedOffer.md)s

#### Parameters

• **offer**: [`ProofErasedOffer`](ProofErasedOffer.md)

• **whitelist?**: `Set`\<`string`\>

#### Returns

[[`ZswapChainState`](ZswapChainState.md), `Map`\<`string`, `bigint`\>]

***

### deserialize()

```ts
static deserialize(raw, netid): ZswapChainState
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ZswapChainState`](ZswapChainState.md)

***

### deserializeFromLedgerState()

```ts
static deserializeFromLedgerState(raw, netid): ZswapChainState
```

Given a whole ledger serialized state, deserialize only the Zswap portion

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ZswapChainState`](ZswapChainState.md)
