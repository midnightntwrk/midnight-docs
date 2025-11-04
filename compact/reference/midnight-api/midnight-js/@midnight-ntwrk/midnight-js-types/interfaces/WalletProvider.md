[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / WalletProvider

# Interface: WalletProvider

Interface for a wallet

## Properties

### coinPublicKey

> `readonly` **coinPublicKey**: `string`

Wallet public coin key

***

### encryptionPublicKey

> `readonly` **encryptionPublicKey**: `string`

Wallet EncryptionPublicKey

## Methods

### balanceTx()

> **balanceTx**(`tx`, `newCoins`): `Promise`\<[`BalancedTransaction`](../type-aliases/BalancedTransaction.md)\>

Balances selects coins, creates spend proofs, and pays fees for a transaction with call proofs.

#### Parameters

##### tx

[`UnbalancedTransaction`](../type-aliases/UnbalancedTransaction.md)

The transaction to balance.

##### newCoins

`CoinInfo`[]

The outputs created during a transaction.

#### Returns

`Promise`\<[`BalancedTransaction`](../type-aliases/BalancedTransaction.md)\>
