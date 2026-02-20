[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallTxOptionsWithPrivateStateId

# Type Alias: CallTxOptionsWithPrivateStateId\<C, ICK\>

> **CallTxOptionsWithPrivateStateId**\<`C`, `ICK`\> = [`CallTxOptionsBase`](CallTxOptionsBase.md)\<`C`, `ICK`\> & `object`

Call transaction options with the private state ID to use to store the new private
state resulting from the circuit call. Since a private state should already be
stored at the given private state ID, we don't need an 'initialPrivateState' like
in [DeployTxOptionsWithPrivateState](DeployTxOptionsWithPrivateState.md).

## Type Declaration

### privateStateId

> `readonly` **privateStateId**: `PrivateStateId`

The identifier for the private state of the contract.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### ICK

`ICK` *extends* `Contract.ImpureCircuitId`\<`C`\>
