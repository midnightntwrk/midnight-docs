[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / waitForFinalizedBalance

# Function: waitForFinalizedBalance()

> **waitForFinalizedBalance**(`wallet`, `throttleTime`?): `Promise`\<`WalletState`\>

Waits for all pending coins to be finalized.

## Parameters

### wallet

`Wallet`

The wallet to check for finalized balance

### throttleTime?

`number` = `5_000`

Throttle time in milliseconds

## Returns

`Promise`\<`WalletState`\>

The wallet state with no pending coins
