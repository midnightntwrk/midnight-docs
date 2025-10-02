[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / createZswapOutput

# Function: createZswapOutput()

```ts
function createZswapOutput(
   circuitContext, 
   coinInfo, 
   recipient): void;
```

Adds a coin to the list of outputs produced by the circuit.

## Parameters

### circuitContext

[`CircuitContext`](../interfaces/CircuitContext.md)\<`unknown`\>

The current circuit context.

### coinInfo

[`EncodedCoinInfo`](../interfaces/EncodedCoinInfo.md)

The coin to produce.

### recipient

[`EncodedRecipient`](../interfaces/EncodedRecipient.md)

The coin recipient - either a coin public key representing an end user or a contract address
                 representing a contract.

## Returns

`void`
