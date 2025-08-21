**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / LedgerState

# Class: LedgerState

The state of the Midnight ledger

## Constructors

### new LedgerState(zswap)

```ts
new LedgerState(zswap): LedgerState
```

Intializes from a Zswap state, with an empty contract set

#### Parameters

• **zswap**: [`ZswapChainState`](ZswapChainState.md)

#### Returns

[`LedgerState`](LedgerState.md)

## Properties

### unmintedNativeTokenSupply

```ts
readonly unmintedNativeTokenSupply: bigint;
```

The remaining unminted supply of native tokens.

***

### zswap

```ts
readonly zswap: ZswapChainState;
```

The Zswap part of the ledger state

## Methods

### apply()

```ts
apply(transaction, context): [LedgerState, TransactionResult]
```

Applies a [ProofErasedTransaction](ProofErasedTransaction.md)

#### Parameters

• **transaction**: [`ProofErasedTransaction`](ProofErasedTransaction.md)

• **context**: [`TransactionContext`](TransactionContext.md)

#### Returns

[[`LedgerState`](LedgerState.md), [`TransactionResult`](TransactionResult.md)]

***

### applySystemTx()

```ts
applySystemTx(transaction): LedgerState
```

Applies a system transaction to this ledger state.

#### Parameters

• **transaction**: [`SystemTransaction`](SystemTransaction.md)

#### Returns

[`LedgerState`](LedgerState.md)

***

### index()

```ts
index(address): undefined | ContractState
```

Indexes into the contract state map with a given contract address

#### Parameters

• **address**: `string`

#### Returns

`undefined` \| [`ContractState`](ContractState.md)

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

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`

***

### treasuryBalance()

```ts
treasuryBalance(token_type): bigint
```

Retrieves the balance of the treasury for a specific token type.

#### Parameters

• **token\_type**: `string`

#### Returns

`bigint`

***

### unclaimedMints()

```ts
unclaimedMints(recipient, token_type): bigint
```

How much in minting rewards a recipient, for a specific token type, is
owed and can claim.

#### Parameters

• **recipient**: `string`

• **token\_type**: `string`

#### Returns

`bigint`

***

### updateIndex()

```ts
updateIndex(address, context): LedgerState
```

Sets the state of a given contract address from a [QueryContext](QueryContext.md)

#### Parameters

• **address**: `string`

• **context**: [`QueryContext`](QueryContext.md)

#### Returns

[`LedgerState`](LedgerState.md)

***

### blank()

```ts
static blank(): LedgerState
```

A fully blank state

#### Returns

[`LedgerState`](LedgerState.md)

***

### deserialize()

```ts
static deserialize(raw, netid): LedgerState
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`LedgerState`](LedgerState.md)
