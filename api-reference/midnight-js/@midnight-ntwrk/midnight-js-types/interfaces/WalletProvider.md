[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / WalletProvider

# Interface: WalletProvider

Interface representing a WalletProvider that handles operations such as
transaction balancing and finalization, and provides access to cryptographic secret keys.

## Methods

### balanceTx()

> **balanceTx**(`tx`, `ttl?`): `Promise`\<`FinalizedTransaction`\>

Balances a transaction

#### Parameters

##### tx

[`UnboundTransaction`](../type-aliases/UnboundTransaction.md)

The transaction to balance.

##### ttl?

`Date`

#### Returns

`Promise`\<`FinalizedTransaction`\>

***

### getCoinPublicKey()

> **getCoinPublicKey**(): `string`

#### Returns

`string`

***

### getEncryptionPublicKey()

> **getEncryptionPublicKey**(): `string`

#### Returns

`string`
