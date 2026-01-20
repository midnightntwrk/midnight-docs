[**@midnight-ntwrk/dapp-connector-api v3.0.0**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / DAppConnectorWalletAPI

# Interface: DAppConnectorWalletAPI

Shape of the Wallet API in the DApp Connector

## Properties

### balanceAndProveTransaction()

> **balanceAndProveTransaction**: (`tx`, `newCoins`) => `Promise`\<`Transaction`\>

It will try to balance given transaction and prove it

#### Parameters

##### tx

`Transaction`

Transaction to balance

##### newCoins

`CoinInfo`[]

New coins created by transaction, for which wallet will watch for

#### Returns

`Promise`\<`Transaction`\>

Proved transaction or error

***

### ~~balanceTransaction()~~

> **balanceTransaction**: (`tx`, `newCoins`) => `Promise`\<`BalanceTransactionToProve` \| `NothingToProve`\>

Balances the provided transaction.

#### Parameters

##### tx

`Transaction`

Transaction to balance

##### newCoins

`CoinInfo`[]

CoinInfo array of coins created by the transaction, which the wallet will watch for and apply to the state

The `newCoins` parameter should be used in cases where a new coin is created (for example, a DApp mints a coin and wants to send it to the wallet).
Because of how Midnight works, newly created coins must be explicitly sent to the wallet using this method. This allows the wallet to monitor them and
incorporate them into its state.

#### Returns

`Promise`\<`BalanceTransactionToProve` \| `NothingToProve`\>

BalanceTransactionToProve or NothingToProve recipe (for the already balanced transaction) or error.

#### Remarks

Balancing a transaction means that for any given output and transaction fees, the wallet will take the available coins
from the state to cover them.

#### Deprecated

Deprecated since version 1.1.0 and will be removed in version 2.0.0. Please use the `balanceAndProveTransaction` method instead.

***

### ~~proveTransaction()~~

> **proveTransaction**: (`recipe`) => `Promise`\<`Transaction`\>

Calls the proving server with the proving recipe and returns the proven transaction or error.

#### Parameters

##### recipe

`ProvingRecipe`

ProvingRecipe with data to prove

#### Returns

`Promise`\<`Transaction`\>

Transaction or error

#### Remarks

- Proof generation takes time and resources, therefore depending on the user's computer specs, this can be an expensive operation
- There can be wallet implementations that do not need to support proving, in which case this method should return an error

#### Deprecated

Deprecated since version 1.1.0 and will be removed in version 2.0.0. Please use the `balanceAndProveTransaction` method instead.

***

### state()

> **state**: () => `Promise`\<[`DAppConnectorWalletState`](DAppConnectorWalletState.md)\>

Returns a promise with the exposed wallet state

#### Returns

`Promise`\<[`DAppConnectorWalletState`](DAppConnectorWalletState.md)\>

***

### submitTransaction()

> **submitTransaction**: (`tx`) => `Promise`\<`string`\>

It will submit given transaction to the node

Submits the provided transaction to the node

#### Parameters

##### tx

`Transaction`

Transaction to submit

#### Returns

`Promise`\<`string`\>

TransactionIdentifier - First transaction identifier from identifiers list or error

#### Param

Transaction to submit

#### Returns

First transaction identifier from identifiers list or error
