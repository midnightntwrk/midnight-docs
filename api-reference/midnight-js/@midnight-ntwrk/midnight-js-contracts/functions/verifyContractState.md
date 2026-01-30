[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / verifyContractState

# Function: verifyContractState()

> **verifyContractState**(`verifierKeys`, `contractState`): `void`

Checks that the given `contractState` contains the given `verifierKeys`.

## Parameters

### verifierKeys

\[`string`, [`VerifierKey`](../../midnight-js-types/type-aliases/VerifierKey.md)\][]

The verifier keys the client has for the deployed contract we're checking.

### contractState

`ContractState`

The (typically already deployed) contract state containing verifier keys.

## Returns

`void`

## Throws

ContractTypeError When one or more of the local and deployed verifier keys do not match.
