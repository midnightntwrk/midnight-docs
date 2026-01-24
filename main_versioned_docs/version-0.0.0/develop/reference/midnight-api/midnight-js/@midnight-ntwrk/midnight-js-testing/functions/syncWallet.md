[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / syncWallet

# Function: syncWallet()

> **syncWallet**(`wallet`, `throttleTime`?): `Promise`\<`bigint`\>

Synchronizes the wallet with the network and waits for a non-zero balance.

## Parameters

### wallet

`Wallet`

The wallet to synchronize

### throttleTime?

`number` = `3_000`

Throttle time in milliseconds

## Returns

`Promise`\<`bigint`\>

A promise that resolves to the wallet balance when sync is close enough and balance is non-zero
