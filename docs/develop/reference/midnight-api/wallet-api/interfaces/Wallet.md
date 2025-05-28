**@midnight-ntwrk/wallet-api v5.0.0** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/wallet-api v5.0.0](../README.md) / Wallet

# Interface: Wallet

Wallet API

## Remarks

Wallet is a data structure that holds the state of the wallet and provides methods for proving, balancing, and submitting transactions.

## Methods

### balanceTransaction()

```ts
balanceTransaction(tx, newCoins): Promise<BalanceTransactionToProve | NothingToProve>
```

Balances the provided transaction.

#### Parameters

• **tx**: `Transaction`

Transaction to balance

• **newCoins**: `CoinInfo`[]

CoinInfo array of coins created by the transaction, which the wallet will watch for and apply to the state

The `newCoins` parameter should be used in cases where a new coin is created (for example, a DApp mints a coin and wants to send it to the wallet).
Because of how Midnight works, newly created coins must be explicitly sent to the wallet using this method. This allows the wallet to monitor them and
incorporate them into its state.

#### Returns

`Promise`\<[`BalanceTransactionToProve`](../type-aliases/BalanceTransactionToProve.md) \| [`NothingToProve`](../type-aliases/NothingToProve.md)\>

[BalanceTransactionToProve](../type-aliases/BalanceTransactionToProve.md) or [NothingToProve](../type-aliases/NothingToProve.md) recipe (for the already balanced transaction) or error.

#### Remarks

Balancing a transaction means that for any given output and transaction fees, the wallet will take the available coins
from the state to cover them.

***

### proveTransaction()

```ts
proveTransaction(recipe): Promise<Transaction>
```

Calls the proving server with the proving recipe and returns the proven transaction or error.

#### Parameters

• **recipe**: [`ProvingRecipe`](../type-aliases/ProvingRecipe.md)

[ProvingRecipe](../type-aliases/ProvingRecipe.md) with data to prove

#### Returns

`Promise`\<`Transaction`\>

Transaction or error

#### Remarks

- Proof generation takes time and resources, therefore depending on the user's computer specs, this can be an expensive operation
- There can be wallet implementations that do not need to support proving, in which case this method should return an error

***

### serializeState()

```ts
serializeState(): Promise<string>
```

Serializes and returns the current state of the wallet which contains:
- The zswap local state
- The transaction history
- The offset in the blockchain corresponding to this state
- The protocol version
- The network ID

#### Returns

`Promise`\<`string`\>

Serialized [WalletState](../type-aliases/WalletState.md) in stringified JSON format

***

### state()

```ts
state(): Observable<WalletState>
```

Observable (rx.js) stream of [WalletState](../type-aliases/WalletState.md)

#### Returns

`Observable`\<[`WalletState`](../type-aliases/WalletState.md)\>

#### Remarks

Should update every time there's a state update

***

### submitTransaction()

```ts
submitTransaction(tx): Promise<string>
```

Submits the provided transaction to the node

#### Parameters

• **tx**: `Transaction`

Transaction to submit

#### Returns

`Promise`\<`string`\>

[TransactionIdentifier](../type-aliases/TransactionIdentifier.md) - First transaction identifier from identifiers list or error

***

### transferTransaction()

```ts
transferTransaction(outputs): Promise<TransactionToProve>
```

Prepares a transfer transaction

#### Parameters

• **outputs**: [`TokenTransfer`](../type-aliases/TokenTransfer.md)[]

An array of [TokenTransfer](../type-aliases/TokenTransfer.md) a user wants to perform.

#### Returns

`Promise`\<[`TransactionToProve`](../type-aliases/TransactionToProve.md)\>

Recipe with [TransactionToProve](../type-aliases/TransactionToProve.md) or error
