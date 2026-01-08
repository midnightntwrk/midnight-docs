[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / DeployContractOptionsBase

# Type Alias: DeployContractOptionsBase\<C\>

> **DeployContractOptionsBase**\<`C`\> = [`ContractConstructorOptionsWithArguments`](ContractConstructorOptionsWithArguments.md)\<`C`\> & `object`

Base type for configuration for [deployContract](../functions/deployContract.md); identical to
[ContractConstructorOptionsWithArguments](ContractConstructorOptionsWithArguments.md) except the `signingKey` is
now optional, since [deployContract](../functions/deployContract.md) will generate a fresh signing key
in the event that `signingKey` is undefined.

## Type declaration

### signingKey?

> `readonly` `optional` **signingKey**: `SigningKey`

The signing key to add as the to-be-deployed contract's maintenance authority.
If undefined, a new signing key is sampled and used as the CMA then stored
in the private state provider under the newly deployed contract's address.
Otherwise, the passed signing key is added as the CMA. The second case is
useful when you want to use the same CMA for two different contracts.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)
