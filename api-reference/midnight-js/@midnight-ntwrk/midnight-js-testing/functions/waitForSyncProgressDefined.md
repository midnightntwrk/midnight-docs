[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / waitForSyncProgressDefined

# Function: waitForSyncProgressDefined()

> **waitForSyncProgressDefined**(`wallet`, `throttleTime`?): `Promise`\<`WalletState`\>

Waits for the wallet's sync progress to be defined.

## Parameters

### wallet

`Wallet`

The wallet to wait for

### throttleTime?

`number` = `3_000`

Throttle time in milliseconds

## Returns

`Promise`\<`WalletState`\>

The wallet state with defined sync progress
