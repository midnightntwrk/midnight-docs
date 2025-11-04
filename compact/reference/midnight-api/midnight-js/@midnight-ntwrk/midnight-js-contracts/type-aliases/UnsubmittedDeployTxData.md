[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnsubmittedDeployTxData

# Type Alias: UnsubmittedDeployTxData\<C\>

> **UnsubmittedDeployTxData**\<`C`\> = [`UnsubmittedDeployTxDataBase`](UnsubmittedDeployTxDataBase.md)\<`C`\> & `object`

Data for an unsubmitted deployment transaction.

## Type declaration

### private

> `readonly` **private**: [`UnsubmittedTxData`](UnsubmittedTxData.md) & `object`

The data of this transaction that is only visible on the user device.

#### Type declaration

##### initialZswapState

> `readonly` **initialZswapState**: `ZswapLocalState`

The Zswap state produced as a result of running the contract constructor. Useful for when
inputs or outputs are created in the contract constructor.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
