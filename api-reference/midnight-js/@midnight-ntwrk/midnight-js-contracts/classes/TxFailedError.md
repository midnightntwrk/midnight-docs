[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / TxFailedError

# Class: TxFailedError

An error indicating that a transaction submitted to a consensus node failed.

## Extends

- `Error`

## Extended by

- [`CallTxFailedError`](CallTxFailedError.md)
- [`DeployTxFailedError`](DeployTxFailedError.md)
- [`InsertVerifierKeyTxFailedError`](InsertVerifierKeyTxFailedError.md)
- [`RemoveVerifierKeyTxFailedError`](RemoveVerifierKeyTxFailedError.md)
- [`ReplaceMaintenanceAuthorityTxFailedError`](ReplaceMaintenanceAuthorityTxFailedError.md)

## Constructors

### Constructor

> **new TxFailedError**(`finalizedTxData`, `circuitId?`): `TxFailedError`

#### Parameters

##### finalizedTxData

`FinalizedTxData`

The finalization data of the transaction that failed.

##### circuitId?

The name of the circuit that was called to create the call
                 transaction that failed. Only defined if a call transaction
                 failed.

`string` | `string`[]

#### Returns

`TxFailedError`

#### Overrides

`Error.constructor`

## Properties

### circuitId?

> `readonly` `optional` **circuitId**: `string` \| `string`[]

The name of the circuit that was called to create the call
                 transaction that failed. Only defined if a call transaction
                 failed.

***

### finalizedTxData

> `readonly` **finalizedTxData**: `FinalizedTxData`

The finalization data of the transaction that failed.
