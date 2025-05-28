[**Midnight.js API Reference v1.0.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / parseCoinPublicKeyToHex

# Function: parseCoinPublicKeyToHex()

> **parseCoinPublicKeyToHex**(`possibleBech32`, `zswapNetworkId`): `string`

Parses a coin public key (in Bech32m format or hex) into a hex string.

## Parameters

### possibleBech32

`string`

The input string, which can be a Bech32m-encoded public key or a hex string.

### zswapNetworkId

`NetworkId`

The network ID used for decoding the Bech32m format.

## Returns

`string`

The hex string representation of the coin public key.

## Throws

`Error`
If the input string is not a valid hex string or a valid Bech32m-encoded public key.
