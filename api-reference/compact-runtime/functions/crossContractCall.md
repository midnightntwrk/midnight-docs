[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / crossContractCall

# Function: crossContractCall()

```ts
function crossContractCall(
   circuitContext, 
   calleeModule, 
   calleeCircuitId, 
   calleeAddress, 
   calleeIsPure, 
   callerProofData, ...
args): Promise<any>;
```

**`Internal`**

Calls a circuit defined in another contract from the currently executing contract and returns the result.

## Parameters

### circuitContext

[`CircuitContext`](../interfaces/CircuitContext.md)

The current circuit context.

### calleeModule

`Module`

The callee module containing TS executables.

### calleeCircuitId

`string`

The name of the circuit to be called in the contract to be called.

### calleeAddress

`string`

The address of the contract to be called.

### calleeIsPure

`boolean`

A flag indicating whether the circuit being called is pure.

### callerProofData

[`PartialProofData`](../interfaces/PartialProofData.md)

The proof data instance created when the caller circuit was initialized.

### args

...`any`[]

The arguments to the circuit to be called.

## Returns

`Promise`\<`any`\>
