[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / constructorContext

# Function: constructorContext()

```ts
function constructorContext<T>(initialPrivateState, coinPublicKey): ConstructorContext<T>;
```

Creates a new [ConstructorContext](../interfaces/ConstructorContext.md) with the given initial private state and an empty Zswap local state.

## Type Parameters

### T

`T`

## Parameters

### initialPrivateState

`T`

The private state to use to execute the contract's constructor.

### coinPublicKey

`string`

The Zswap coin public key of the user executing the contract.

## Returns

[`ConstructorContext`](../interfaces/ConstructorContext.md)\<`T`\>
