[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallTxFailedError

# Class: CallTxFailedError

An error indicating that a call transaction was not successfully applied by the consensus node.

## Extends

- [`TxFailedError`](TxFailedError.md)

## Constructors

### Constructor

> **new CallTxFailedError**(`finalizedTxData`, `circuitId`): `CallTxFailedError`

#### Parameters

##### finalizedTxData

[`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)

The finalization data of the call transaction that failed.

##### circuitId

`string`

The name of the circuit that was called to build the transaction.

#### Returns

`CallTxFailedError`

#### Overrides

[`TxFailedError`](TxFailedError.md).[`constructor`](TxFailedError.md#constructor)

## Properties

### circuitId?

> `readonly` `optional` **circuitId**: `string`

The name of the circuit that was called to create the call
                 transaction that failed. Only defined if a call transaction
                 failed.

#### Inherited from

[`TxFailedError`](TxFailedError.md).[`circuitId`](TxFailedError.md#circuitid)

***

### finalizedTxData

> `readonly` **finalizedTxData**: [`FinalizedTxData`](../../midnight-js-types/interfaces/FinalizedTxData.md)

The finalization data of the transaction that failed.

#### Inherited from

[`TxFailedError`](TxFailedError.md).[`finalizedTxData`](TxFailedError.md#finalizedtxdata)
