[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / sendTransactionToAddress

# Function: sendTransactionToAddress()

> **sendTransactionToAddress**(`walletWithFunds`, `address`, `outputValue`?): `Promise`\<`void`\>

Sends a transaction to a specific address.

## Parameters

### walletWithFunds

[`MidnightWallet`](../type-aliases/MidnightWallet.md)

The wallet to send funds from

### address

`string`

The recipient's address

### outputValue?

`bigint` = `100_000_000n`

The amount to send

## Returns

`Promise`\<`void`\>
