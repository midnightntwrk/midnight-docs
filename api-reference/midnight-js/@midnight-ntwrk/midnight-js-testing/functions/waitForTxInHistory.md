[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / waitForTxInHistory

# Function: waitForTxInHistory()

> **waitForTxInHistory**(`txId`, `wallet`, `delayTime`?): `Promise`\<`void`\>

Waits for a specific transaction ID to appear in the wallet's transaction history.

## Parameters

### txId

`string`

The transaction ID to wait for

### wallet

`Wallet`

The wallet to check

### delayTime?

`number` = `1_000`

Delay time in milliseconds

## Returns

`Promise`\<`void`\>

Resolves when the transaction is found in history
