[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnprovenDeployTxProviders

# Type Alias: UnprovenDeployTxProviders\<C\>

> **UnprovenDeployTxProviders**\<`C`\> = `Pick`\<[`ContractProviders`](ContractProviders.md)\<`C`\>, `"zkConfigProvider"` \| `"walletProvider"`\>

Providers needed to create an unproven deployment transactions, just the ZK artifact
provider and a wallet.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
