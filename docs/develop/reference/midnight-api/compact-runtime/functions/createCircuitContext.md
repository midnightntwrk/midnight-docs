[**@midnight-ntwrk/compact-runtime v0.10.1**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / createCircuitContext

# Function: createCircuitContext()

```ts
function createCircuitContext<PS>(
   contractAddress, 
   coinPublicKey, 
   contractState, 
   privateState, 
time?): CircuitContext<PS>;
```

Creates a new circuit context.

## Type Parameters

### PS

`PS`

## Parameters

### contractAddress

`string`

The address of the contract being executed.

### coinPublicKey

The Zswap coin public key of the user executing the circuit.

`string` | [`EncodedCoinPublicKey`](../interfaces/EncodedCoinPublicKey.md)

### contractState

The initial ledger state of the contract.

[`ContractState`](../classes/ContractState.md) | [`StateValue`](../classes/StateValue.md)

### privateState

`PS`

The initial private state of the contract.

### time?

`number`

Optional parameter indicating the time in seconds since the last Unix epoch. Parameter used mainly for testing.

## Returns

[`CircuitContext`](../interfaces/CircuitContext.md)\<`PS`\>

## Typeparam

PS The type of the private state of the contract.
