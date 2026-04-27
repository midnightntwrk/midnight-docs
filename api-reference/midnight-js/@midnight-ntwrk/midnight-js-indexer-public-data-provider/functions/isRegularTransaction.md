[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-indexer-public-data-provider](../README.md) / isRegularTransaction

# Function: isRegularTransaction()

> **isRegularTransaction**(`tx`): `tx is Transaction & { block: Block; contractActions: readonly ContractAction[]; dustLedgerEvents: readonly DustLedgerEvent[]; endIndex: number; fees: TransactionFees; hash: string; id: number; identifiers: readonly string[]; merkleTreeRoot: string; protocolVersion: number; raw: string; startIndex: number; transactionResult: TransactionResult; unshieldedCreatedOutputs: readonly UnshieldedUtxo[]; unshieldedSpentOutputs: readonly UnshieldedUtxo[]; zswapLedgerEvents: readonly ZswapLedgerEvent[] } & { hash: string; identifiers: string[] }`

## Parameters

### tx

`any`

## Returns

`tx is Transaction & { block: Block; contractActions: readonly ContractAction[]; dustLedgerEvents: readonly DustLedgerEvent[]; endIndex: number; fees: TransactionFees; hash: string; id: number; identifiers: readonly string[]; merkleTreeRoot: string; protocolVersion: number; raw: string; startIndex: number; transactionResult: TransactionResult; unshieldedCreatedOutputs: readonly UnshieldedUtxo[]; unshieldedSpentOutputs: readonly UnshieldedUtxo[]; zswapLedgerEvents: readonly ZswapLedgerEvent[] } & { hash: string; identifiers: string[] }`
