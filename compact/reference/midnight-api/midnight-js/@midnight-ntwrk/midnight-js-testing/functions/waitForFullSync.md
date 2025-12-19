[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / waitForFullSync

# Function: waitForFullSync()

> **waitForFullSync**(`wallet`, `throttleTime`?): `Promise`\<`WalletState`\>

Waits for the wallet to fully synchronize with the network.

## Parameters

### wallet

`Wallet`

The wallet to wait for

### throttleTime?

`number` = `3_000`

Throttle time in milliseconds

## Returns

`Promise`\<`WalletState`\>

The synchronized wallet state
