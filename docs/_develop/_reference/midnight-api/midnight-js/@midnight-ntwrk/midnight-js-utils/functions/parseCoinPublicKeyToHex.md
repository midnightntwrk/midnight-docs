[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / parseCoinPublicKeyToHex

# Function: parseCoinPublicKeyToHex()

> **parseCoinPublicKeyToHex**(`possibleBech32`, `zswapNetworkId`): `string`

Parses a coin public key (in Bech32m format or hex) into a hex formatted string.

## Parameters

### possibleBech32

`string`

The input string, which can be a Bech32m-encoded coin public key or a hex string.

### zswapNetworkId

`NetworkId`

The network ID used for decoding the Bech32m formatted string.

## Returns

`string`

The hex string representation of the coin public key.

## Throws

`Error`
If the input string is not a valid hex string or a valid Bech32m-encoded coin public key.
