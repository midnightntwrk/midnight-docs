[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / assertIsContractAddress

# Function: assertIsContractAddress()

> **assertIsContractAddress**(`contractAddress`): `asserts contractAddress is string`

**`Internal`**

Asserts that a string represents a hex-encoded contract address.

## Parameters

### contractAddress

`string`

The source string.

## Returns

`asserts contractAddress is string`

## Throws

`TypeError`
`contractAddress` is not a correctly formatted ContractAddress.
