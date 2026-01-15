[**@midnight-ntwrk/compact-runtime v0.14.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / createCircuitContext

# Function: createCircuitContext()

```ts
function createCircuitContext<PS>(
   contractAddress, 
   coinPublicKeyOrZswapState, 
   contractState, 
   privateState, 
   gasLimit?, 
   costModel?, 
time?): CircuitContext<PS>;
```

## Type Parameters

### PS

`PS`

## Parameters

### contractAddress

`string`

### coinPublicKeyOrZswapState

`string` | [`ZswapLocalState`](../interfaces/ZswapLocalState.md) | [`EncodedCoinPublicKey`](../interfaces/EncodedCoinPublicKey.md) | [`EncodedZswapLocalState`](../interfaces/EncodedZswapLocalState.md)

### contractState

[`ContractState`](../classes/ContractState.md) | [`StateValue`](../classes/StateValue.md) | [`ChargedState`](../classes/ChargedState.md)

### privateState

`PS`

### gasLimit?

[`RunningCost`](../type-aliases/RunningCost.md)

### costModel?

[`CostModel`](../classes/CostModel.md)

### time?

`number`

## Returns

[`CircuitContext`](../interfaces/CircuitContext.md)\<`PS`\>
