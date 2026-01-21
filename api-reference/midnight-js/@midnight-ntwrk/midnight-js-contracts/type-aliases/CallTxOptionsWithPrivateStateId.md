[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallTxOptionsWithPrivateStateId

# Type Alias: CallTxOptionsWithPrivateStateId\<C, ICK\>

> **CallTxOptionsWithPrivateStateId**\<`C`, `ICK`\> = [`CallTxOptionsBase`](CallTxOptionsBase.md)\<`C`, `ICK`\> & `object`

Call transaction options with the private state ID to use to store the new private
state resulting from the circuit call. Since a private state should already be
stored at the given private state ID, we don't need an 'initialPrivateState' like
in [DeployTxOptionsWithPrivateState](DeployTxOptionsWithPrivateState.md).

## Type declaration

### privateStateId

> `readonly` **privateStateId**: [`PrivateStateId`](../../midnight-js-types/type-aliases/PrivateStateId.md)

The identifier for the private state of the contract.

## Type Parameters

### C

`C` *extends* [`Contract`](../../midnight-js-types/interfaces/Contract.md)

### ICK

`ICK` *extends* [`ImpureCircuitId`](../../midnight-js-types/type-aliases/ImpureCircuitId.md)\<`C`\>
