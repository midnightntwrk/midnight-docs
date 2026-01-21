[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / MidnightWalletProvider

# Class: MidnightWalletProvider

Provider class that implements wallet functionality for the Midnight network.
Handles transaction balancing, submission, and wallet state management.

## Implements

## Implements

## Implements

## Implements

- [`MidnightProvider`](../../midnight-js-types/interfaces/MidnightProvider.md)
- [`WalletProvider`](../../midnight-js-types/interfaces/WalletProvider.md)
- `Resource`

## Properties

### coinPublicKey

> `readonly` **coinPublicKey**: `string`

Wallet public coin key

#### Implementation of

[`WalletProvider`](../../midnight-js-types/interfaces/WalletProvider.md).[`coinPublicKey`](../../midnight-js-types/interfaces/WalletProvider.md#coinpublickey)

***

### encryptionPublicKey

> `readonly` **encryptionPublicKey**: `string`

Wallet EncryptionPublicKey

#### Implementation of

[`WalletProvider`](../../midnight-js-types/interfaces/WalletProvider.md).[`encryptionPublicKey`](../../midnight-js-types/interfaces/WalletProvider.md#encryptionpublickey)

***

### env

> `readonly` **env**: [`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

***

### logger

> **logger**: `Logger`

***

### wallet

> `readonly` **wallet**: [`MidnightWallet`](../type-aliases/MidnightWallet.md)

## Methods

### balanceTx()

> **balanceTx**(`tx`, `newCoins`): `Promise`\<[`BalancedTransaction`](../../midnight-js-types/type-aliases/BalancedTransaction.md)\>

Balances an unbalanced transaction by adding necessary inputs and change outputs.

#### Parameters

##### tx

[`UnbalancedTransaction`](../../midnight-js-types/type-aliases/UnbalancedTransaction.md)

The unbalanced transaction to balance

##### newCoins

`CoinInfo`[]

Array of new coins to include in the transaction

#### Returns

`Promise`\<[`BalancedTransaction`](../../midnight-js-types/type-aliases/BalancedTransaction.md)\>

A promise that resolves to the balanced transaction

#### Implementation of

[`WalletProvider`](../../midnight-js-types/interfaces/WalletProvider.md).[`balanceTx`](../../midnight-js-types/interfaces/WalletProvider.md#balancetx)

***

### close()

> **close**(): `Promise`\<`void`\>

Closes the wallet and releases resources.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the wallet is closed

#### Implementation of

`Resource.close`

***

### start()

> **start**(`waitForFundsInWallet`): `Promise`\<`void`\>

Starts the wallet and optionally waits for funds to be available.

#### Parameters

##### waitForFundsInWallet

`boolean` = `true`

Whether to wait for funds to be available (default: true)

#### Returns

`Promise`\<`void`\>

A promise that resolves when the wallet is started and funds are available if requested

#### Implementation of

`Resource.start`

***

### submitTx()

> **submitTx**(`tx`): `Promise`\<`string`\>

Submits a balanced transaction to the network.

#### Parameters

##### tx

[`BalancedTransaction`](../../midnight-js-types/type-aliases/BalancedTransaction.md)

The balanced transaction to submit

#### Returns

`Promise`\<`string`\>

A promise that resolves to the transaction hash

#### Implementation of

[`MidnightProvider`](../../midnight-js-types/interfaces/MidnightProvider.md).[`submitTx`](../../midnight-js-types/interfaces/MidnightProvider.md#submittx)

***

### build()

> `static` **build**(`logger`, `env`, `seed`?, `walletLogLevel`?): `Promise`\<`MidnightWalletProvider`\>

Creates a new MidnightWalletProvider instance.

#### Parameters

##### logger

`Logger`

Logger instance for recording operations

##### env

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Configuration for the wallet environment

##### seed?

`string`

Optional seed for wallet generation. If not provided, a new random wallet will be created

##### walletLogLevel?

`LogLevel` = `DEFAULT_WALLET_LOG_LEVEL`

Optional log level for wallet operations

#### Returns

`Promise`\<`MidnightWalletProvider`\>

A promise that resolves to the new wallet provider

#### Static

***

### withWallet()

> `static` **withWallet**(`logger`, `env`, `wallet`): `Promise`\<`MidnightWalletProvider`\>

Creates a new MidnightWalletProvider instance using an existing wallet.

#### Parameters

##### logger

`Logger`

Logger instance for recording operations

##### env

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Configuration for the wallet environment

##### wallet

[`MidnightWallet`](../type-aliases/MidnightWallet.md)

Existing wallet instance to use

#### Returns

`Promise`\<`MidnightWalletProvider`\>

A promise that resolves to the new wallet provider using the existing wallet

#### Static
