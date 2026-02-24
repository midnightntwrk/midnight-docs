[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-testing](../README.md) / SerializedWalletState

# Type Alias: SerializedWalletState

> **SerializedWalletState** = `object`

Represents the serialized state of a wallet that can be saved to and loaded from storage.

## Properties

### networkId

> **networkId**: `string`

Identifier for the network this wallet state belongs to

***

### offset

> **offset**: `number`

The block height/offset up to which the wallet has been synced

***

### protocolVersion

> **protocolVersion**: `string`

Version of the protocol being used

***

### state

> **state**: `string`

Serialized wallet state data

***

### txHistory

> **txHistory**: `string`[]

Array of serialized transaction history entries
