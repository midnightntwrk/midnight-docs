[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / DeployTxOptionsBase

# Type Alias: DeployTxOptionsBase\<C\>

> **DeployTxOptionsBase**\<`C`\> = [`ContractConstructorOptionsWithArguments`](ContractConstructorOptionsWithArguments.md)\<`C`\> & `object`

Base type for deploy transaction configuration.

## Type declaration

### signingKey

> `readonly` **signingKey**: `SigningKey`

The signing key to add as the to-be-deployed contract's maintenance authority.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
