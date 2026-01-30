[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FindDeployedContractOptionsBase

# Type Alias: FindDeployedContractOptionsBase\<C\>

> **FindDeployedContractOptionsBase**\<`C`\> = `object`

Base type for the configuration options for [findDeployedContract](../functions/findDeployedContract.md).

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)

## Properties

### contract

> `readonly` **contract**: `C`

The contract to use to execute circuits.

***

### contractAddress

> `readonly` **contractAddress**: `ContractAddress`

The address of a previously deployed contract.

***

### signingKey?

> `readonly` `optional` **signingKey**: `SigningKey`

The signing key to use to perform contract maintenance updates. If defined, the given signing
key is stored for this contract address. This is useful when someone has already added the given signing
key to the contract maintenance authority. If undefined, and there is an existing signing key for the
contract address locally, the existing signing key is kept. This is useful when the contract was
deployed locally. If undefined, and there is not an existing signing key for the contract address
locally, a fresh signing key is generated and stored for the contract address locally. This is
useful when you want to give a signing key to someone else to add you as a maintenance authority.
