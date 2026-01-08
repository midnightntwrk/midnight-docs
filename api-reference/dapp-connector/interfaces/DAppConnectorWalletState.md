[**@midnight-ntwrk/dapp-connector-api v3.0.0**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / DAppConnectorWalletState

# Interface: DAppConnectorWalletState

The shape of the wallet state that must be exposed

## Properties

### address

> **address**: `string`

The bech32m encoded address

***

### ~~addressLegacy~~

> **addressLegacy**: `string`

#### Deprecated

please use the `address` field instead.

The wallet address, which is a concatenation of coinPublicKey and encryptionPublicKey

***

### coinPublicKey

> **coinPublicKey**: `string`

The bech32m encoded coin public key

***

### ~~coinPublicKeyLegacy~~

> **coinPublicKeyLegacy**: `string`

#### Deprecated

please use the `coinPublicKey` field instead.

The hex encoded coin public key

***

### encryptionPublicKey

> **encryptionPublicKey**: `string`

The bech32m encoded encryption public key

***

### ~~encryptionPublicKeyLegacy~~

> **encryptionPublicKeyLegacy**: `string`

#### Deprecated

please use the `encryptionPublicKey` field instead.

The hex encoded encryption public key
