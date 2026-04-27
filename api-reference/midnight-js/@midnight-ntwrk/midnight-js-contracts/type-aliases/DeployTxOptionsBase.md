[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / DeployTxOptionsBase

# Type Alias: DeployTxOptionsBase\<C\>

> **DeployTxOptionsBase**\<`C`\> = [`ContractConstructorOptionsWithArguments`](ContractConstructorOptionsWithArguments.md)\<`C`\> & `object`

Base type for deploy transaction configuration.

## Type Declaration

### additionalCoinEncPublicKeyMappings?

> `readonly` `optional` **additionalCoinEncPublicKeyMappings?**: `ReadonlyMap`\<`CoinPublicKey`, `EncPublicKey`\>

An optional mapping of CoinPublicKey to EncPublicKey that can be used to resolve encryption
keys for coins created in the contract constructor. This is useful in cases where the constructor creates
outputs to addresses that don't belong to the current user.

### signingKey

> `readonly` **signingKey**: `SigningKey`

The signing key to add as the to-be-deployed contract's maintenance authority.

## Type Parameters

### C

`C` *extends* `Contract.Any`
