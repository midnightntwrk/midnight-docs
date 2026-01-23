[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / waitForFunds

# Function: waitForFunds()

> **waitForFunds**(`wallet`, `env`, `fundFromFaucet`?): `Promise`\<`bigint`\>

Waits for funds to be available in the wallet.
If a faucet is configured, requests tokens from it.

## Parameters

### wallet

[`MidnightWallet`](../type-aliases/MidnightWallet.md)

The wallet to check for funds

### env

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Environment configuration containing faucet details

### fundFromFaucet?

`boolean` = `false`

Whether to request tokens from the faucet

## Returns

`Promise`\<`bigint`\>

A promise that resolves to the wallet balance
