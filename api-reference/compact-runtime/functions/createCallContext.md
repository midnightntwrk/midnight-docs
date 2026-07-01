[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / createCallContext

# Function: createCallContext()

```ts
function createCallContext<PS>(
   circuitId, 
   contractAddress, 
   coinPublicKeyOrZswapState, 
   contractState, 
   privateState, 
   maybeTime?, 
   parentBlockHash?, 
caller?): CallContext<PS>;
```

## Type Parameters

### PS

`PS`

## Parameters

### circuitId

`string`

### contractAddress

`string`

### coinPublicKeyOrZswapState

`string` | [`ZswapLocalState`](../interfaces/ZswapLocalState.md) | [`EncodedCoinPublicKey`](../interfaces/EncodedCoinPublicKey.md) | [`EncodedZswapLocalState`](../interfaces/EncodedZswapLocalState.md)

### contractState

[`ContractState`](../classes/ContractState.md) | [`StateValue`](../classes/StateValue.md) | [`ChargedState`](../classes/ChargedState.md)

### privateState

`PS`

### maybeTime?

`number`

### parentBlockHash?

`string`

### caller?

[`PublicAddress`](../type-aliases/PublicAddress.md)

## Returns

`CallContext`\<`PS`\>
