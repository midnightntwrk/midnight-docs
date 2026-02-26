[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / makeContractExecutableRuntime

# Variable: makeContractExecutableRuntime()

> `const` **makeContractExecutableRuntime**: (`zkConfigProvider`, `options`) => `ManagedRuntime`\<`ContractExecutable.ContractExecutable.Context`, `ConfigError.ConfigError`\>

Constructs an Effect managed runtime configured to execute contract executables.

## Parameters

### zkConfigProvider

[`ZKConfigProvider`](../classes/ZKConfigProvider.md)\<`string`\>

The [ZKConfigProvider](../classes/ZKConfigProvider.md) that is to be adapted.

### options

[`ContractExecutableRuntimeOptions`](../type-aliases/ContractExecutableRuntimeOptions.md)

Values that will be mapped into and made available within the constructed runtime.

## Returns

`ManagedRuntime`\<`ContractExecutable.ContractExecutable.Context`, `ConfigError.ConfigError`\>

An Effect ManagedRuntime that can be used to execute ContractExecutable instances.
