[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / waitForPending

# Function: waitForPending()

> **waitForPending**(`wallet`, `throttleTime`?): `Promise`\<`WalletState`\>

Waits for the wallet to have pending coins.

## Parameters

### wallet

`Wallet`

The wallet to check for pending coins

### throttleTime?

`number` = `1_000`

Throttle time in milliseconds

## Returns

`Promise`\<`WalletState`\>

The wallet state with pending coins
