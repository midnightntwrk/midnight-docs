[**Midnight.js API Reference v4.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnsubmittedTxData

# Type Alias: UnsubmittedTxData

> **UnsubmittedTxData** = `object`

Data relevant to any unsubmitted transaction.

## Remarks

**Privacy-sensitive type.** Every field on this type is private: the
`unprovenTx` field carries the `UnprovenTransaction` that the underlying
zero-knowledge proofs were designed to keep confidential, and `newCoins`
includes shielded coin material that must not leak.

Application code must not log, serialize, or transmit instances of this
type. The framework deliberately exposes these references to support
retry, replay, debug, and redacted-telemetry workflows that require
access to the underlying transaction structure. Raw transmission to
observability platforms (log shippers, error reporters, analytics) is
not an intended use.

## Properties

### newCoins

> `readonly` **newCoins**: `ShieldedCoinInfo`[]

New coins created during the construction of the transaction.

***

### unprovenTx

> `readonly` **unprovenTx**: `UnprovenTransaction`

The unproven ledger transaction produced.
