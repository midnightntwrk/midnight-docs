[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapChainState

# Class: ZswapChainState

The on-chain state of Zswap, consisting of a Merkle tree of coin
commitments, a set of nullifiers, an index into the Merkle tree, and a set
of valid past Merkle tree roots

## Constructors

### Constructor

```ts
new ZswapChainState(): ZswapChainState;
```

#### Returns

`ZswapChainState`

## Properties

### firstFree

```ts
readonly firstFree: bigint;
```

The first free index in the coin commitment tree

## Methods

### filter()

```ts
filter(contractAddress): ZswapChainState;
```

Filters the state to only include coins that are relevant to a given
contract address.

#### Parameters

##### contractAddress

`string`

#### Returns

`ZswapChainState`

***

### postBlockUpdate()

```ts
postBlockUpdate(tblock): ZswapChainState;
```

Carries out a post-block update, which does amortized bookkeeping that
only needs to be done once per state change.

Typically, `postBlockUpdate` should be run after any (sequence of)
(system)-transaction application(s).

#### Parameters

##### tblock

`Date`

#### Returns

`ZswapChainState`

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

### tryApply()

```ts
tryApply<P>(offer, whitelist?): [ZswapChainState, Map<string, bigint>];
```

Try to apply an [ZswapOffer](ZswapOffer.md) to the state, returning the updated state
and a map on newly inserted coin commitments to their inserted indices.

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### offer

[`ZswapOffer`](ZswapOffer.md)\<`P`\>

##### whitelist?

`Set`\<`string`\>

A set of contract addresses that are of interest. If
set, *only* these addresses are tracked, and all other information is
discarded.

#### Returns

\[`ZswapChainState`, `Map`\<`string`, `bigint`\>\]

***

### deserialize()

```ts
static deserialize(raw): ZswapChainState;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`ZswapChainState`

***

### deserializeFromLedgerState()

```ts
static deserializeFromLedgerState(raw): ZswapChainState;
```

Given a whole ledger serialized state, deserialize only the Zswap portion

#### Parameters

##### raw

`Uint8Array`

#### Returns

`ZswapChainState`
