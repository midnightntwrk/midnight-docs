[**@midnight-ntwrk/testkit-js v3.1.0**](../README.md)

***

Provider class that implements wallet functionality for the Midnight network.
Handles transaction balancing, submission, and wallet state management.

## Implements

- `MidnightProvider`
- `WalletProvider`

## Properties

### dustSecretKey

> `readonly` **dustSecretKey**: `DustSecretKey`

***

### env

> `readonly` **env**: [`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

***

### logger

> **logger**: `Logger`

***

### unshieldedKeystore

> `readonly` **unshieldedKeystore**: `UnshieldedKeystore`

***

### wallet

> `readonly` **wallet**: `WalletFacade`

***

### zswapSecretKeys

> `readonly` **zswapSecretKeys**: `ZswapSecretKeys`

## Methods

### balanceTx()

> **balanceTx**(`tx`, `ttl?`): `Promise`\<`FinalizedTransaction`\>

Balances a transaction

#### Parameters

##### tx

`UnboundTransaction`

The transaction to balance.

##### ttl?

`Date` = `...`

#### Returns

`Promise`\<`FinalizedTransaction`\>

#### Implementation of

`WalletProvider.balanceTx`

***

### getCoinPublicKey()

> **getCoinPublicKey**(): `string`

#### Returns

`string`

#### Implementation of

`WalletProvider.getCoinPublicKey`

***

### getEncryptionPublicKey()

> **getEncryptionPublicKey**(): `string`

#### Returns

`string`

#### Implementation of

`WalletProvider.getEncryptionPublicKey`

***

### start()

> **start**(`waitForFundsInWallet?`, `tokenType?`): `Promise`\<`void`\>

#### Parameters

##### waitForFundsInWallet?

`boolean` = `true`

##### tokenType?

`TokenType` = `...`

#### Returns

`Promise`\<`void`\>

***

### stop()

> **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### submitTx()

> **submitTx**(`tx`): `Promise`\<`string`\>

Submit a transaction to the network to be consensed upon.

#### Parameters

##### tx

`FinalizedTransaction`

The finalized transaction to submit.

#### Returns

`Promise`\<`string`\>

The transaction identifier of the submitted transaction.

#### Implementation of

`MidnightProvider.submitTx`

***

### build()

> `static` **build**(`logger`, `env`, `seed?`): `Promise`\<`MidnightWalletProvider`\>

#### Parameters

##### logger

`Logger`

##### env

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

##### seed?

`string`

#### Returns

`Promise`\<`MidnightWalletProvider`\>

***

### withWallet()

> `static` **withWallet**(`logger`, `env`, `wallet`, `zswapSecretKeys`, `dustSecretKey`, `unshieldedKeystore`): `Promise`\<`MidnightWalletProvider`\>

#### Parameters

##### logger

`Logger`

##### env

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

##### wallet

`WalletFacade`

##### zswapSecretKeys

`ZswapSecretKeys`

##### dustSecretKey

`DustSecretKey`

##### unshieldedKeystore

`UnshieldedKeystore`

#### Returns

`Promise`\<`MidnightWalletProvider`\>
