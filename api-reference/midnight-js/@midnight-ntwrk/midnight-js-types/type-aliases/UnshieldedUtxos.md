[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / UnshieldedUtxos

# Type Alias: UnshieldedUtxos

> **UnshieldedUtxos** = `object`

Represents a collection of unshielded UTXOs, which are unspent transaction outputs that are not shielded.
This type is used to manage and track the state of unshielded UTXOs.

## Properties

### created

> `readonly` **created**: readonly [`UnshieldedUtxo`](UnshieldedUtxo.md)[]

Represents the unshielded UTXOs that have been created but not yet spent.

***

### spent

> `readonly` **spent**: readonly [`UnshieldedUtxo`](UnshieldedUtxo.md)[]

Represents the unshielded UTXOs that have been spent.
