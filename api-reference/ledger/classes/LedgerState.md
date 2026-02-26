[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / LedgerState

# Class: LedgerState

The state of the Midnight ledger

## Constructors

### Constructor

```ts
new LedgerState(network_id, zswap): LedgerState;
```

Intializes from a Zswap state, with an empty contract set

#### Parameters

##### network\_id

`string`

##### zswap

[`ZswapChainState`](ZswapChainState.md)

#### Returns

`LedgerState`

## Properties

### blockRewardPool

```ts
readonly blockRewardPool: bigint;
```

The remaining unrewarded supply of native tokens.

***

### dust

```ts
readonly dust: DustState;
```

The dust subsystem state

***

### lockedPool

```ts
readonly lockedPool: bigint;
```

The remaining size of the locked Night pool.

***

### parameters

```ts
parameters: LedgerParameters;
```

The parameters of the ledger

***

### reservePool

```ts
readonly reservePool: bigint;
```

The size of the reserve Night pool

***

### utxo

```ts
readonly utxo: UtxoState;
```

The unshielded utxos present

***

### zswap

```ts
readonly zswap: ZswapChainState;
```

The Zswap part of the ledger state

## Methods

### apply()

```ts
apply(transaction, context): [LedgerState, TransactionResult];
```

Applies a [Transaction](Transaction.md)

#### Parameters

##### transaction

[`VerifiedTransaction`](VerifiedTransaction.md)

##### context

[`TransactionContext`](TransactionContext.md)

#### Returns

\[`LedgerState`, [`TransactionResult`](TransactionResult.md)\]

***

### applySystemTx()

```ts
applySystemTx(transaction, tblock): [LedgerState, Event[]];
```

Applies a system transaction to this ledger state.

#### Parameters

##### transaction

[`SystemTransaction`](SystemTransaction.md)

##### tblock

`Date`

#### Returns

\[`LedgerState`, [`Event`](Event.md)[]\]

***

### bridgeReceiving()

#### Call Signature

```ts
bridgeReceiving(recipient): bigint;
```

How much in bridged night a recipient is owed and can claim.

##### Parameters

###### recipient

`string`

##### Returns

`bigint`

#### Call Signature

```ts
bridgeReceiving(recipient): bigint;
```

How much in bridged night a recipient is owed and can claim.

##### Parameters

###### recipient

`string`

##### Returns

`bigint`

***

### index()

```ts
index(address): undefined | ContractState;
```

Indexes into the contract state map with a given contract address

#### Parameters

##### address

`string`

#### Returns

`undefined` \| [`ContractState`](ContractState.md)

***

### postBlockUpdate()

```ts
postBlockUpdate(
   tblock, 
   detailedBlockFullness?, 
   overallBlockFullness?): LedgerState;
```

Carries out a post-block update, which does amortized bookkeeping that
only needs to be done once per state change.

Typically, `postBlockUpdate` should be run after any (sequence of)
(system)-transaction application(s).

#### Parameters

##### tblock

`Date`

##### detailedBlockFullness?

[`NormalizedCost`](../type-aliases/NormalizedCost.md)

##### overallBlockFullness?

`number`

#### Returns

`LedgerState`

***

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### testingDistributeNight()

```ts
testingDistributeNight(
   recipient, 
   amount, 
   tblock): LedgerState;
```

Allows distributing the specified amount of Night to the recipient's address.
Use is for testing purposes only.

#### Parameters

##### recipient

`string`

##### amount

`bigint`

##### tblock

`Date`

#### Returns

`LedgerState`

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

### treasuryBalance()

```ts
treasuryBalance(token_type): bigint;
```

Retrieves the balance of the treasury for a specific token type.

#### Parameters

##### token\_type

[`TokenType`](../type-aliases/TokenType.md)

#### Returns

`bigint`

***

### unclaimedBlockRewards()

```ts
unclaimedBlockRewards(recipient): bigint;
```

How much in block rewards a recipient is owed and can claim.

#### Parameters

##### recipient

`string`

#### Returns

`bigint`

***

### updateIndex()

```ts
updateIndex(
   address, 
   state, 
   balance): LedgerState;
```

Sets the state of a given contract address from a [ChargedState](ChargedState.md)

#### Parameters

##### address

`string`

##### state

[`ChargedState`](ChargedState.md)

##### balance

`Map`\<[`TokenType`](../type-aliases/TokenType.md), `bigint`\>

#### Returns

`LedgerState`

***

### blank()

```ts
static blank(network_id): LedgerState;
```

A fully blank state

#### Parameters

##### network\_id

`string`

#### Returns

`LedgerState`

***

### deserialize()

```ts
static deserialize(raw): LedgerState;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`LedgerState`
