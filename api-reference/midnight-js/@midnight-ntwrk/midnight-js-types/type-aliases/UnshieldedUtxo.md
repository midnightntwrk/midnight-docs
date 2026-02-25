[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / UnshieldedUtxo

# Type Alias: UnshieldedUtxo

> **UnshieldedUtxo** = `object`

Represents an unshielded UTXO (Unspent Transaction Output).
Unshielded UTXOs are outputs that have not been shielded or encrypted, making them visible on the public ledger.

## Properties

### intentHash

> `readonly` **intentHash**: `IntentHash`

The identifier of the intent associated with the unshielded UTXO.
This is used to track the intent behind the creation or use of the UTXO.

***

### owner

> `readonly` **owner**: `ContractAddress`

The unique identifier of the unshielded UTXO.

***

### tokenType

> `readonly` **tokenType**: `RawTokenType`

The type of token associated with the unshielded UTXO.
This indicates the kind of asset or currency represented by the UTXO.

***

### value

> `readonly` **value**: `bigint`

The value of the unshielded UTXO, represented as a bigint.
