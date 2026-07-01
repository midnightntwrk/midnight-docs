[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / createInitialQueryContext

# Function: createInitialQueryContext()

```ts
function createInitialQueryContext(
   contractState, 
   contractAddress, 
   time, 
   parentBlockHash?, 
   caller?): QueryContext;
```

**`Internal`**

## Parameters

### contractState

[`ContractState`](../classes/ContractState.md) | [`StateValue`](../classes/StateValue.md) | [`ChargedState`](../classes/ChargedState.md)

### contractAddress

`string`

### time

`number`

### parentBlockHash?

`string`

### caller?

[`PublicAddress`](../type-aliases/PublicAddress.md)

## Returns

[`QueryContext`](../classes/QueryContext.md)
