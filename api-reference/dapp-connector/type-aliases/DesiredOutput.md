[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / DesiredOutput

# Type Alias: DesiredOutput

> **DesiredOutput** = `object`

Desired output from a transaction or intent. It specifies the type of the output, the amount and the recipient.
Recipient needs to be a properly formatted Bech32m address matching the kind of the token and network id the wallet is connected to.

## Properties

### kind

> **kind**: `"shielded"` \| `"unshielded"`

***

### recipient

> **recipient**: `string`

***

### type

> **type**: [`TokenType`](TokenType.md)

***

### value

> **value**: `bigint`
