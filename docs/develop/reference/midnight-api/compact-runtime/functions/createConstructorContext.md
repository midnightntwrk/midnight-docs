[**@midnight-ntwrk/compact-runtime v0.14.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / createConstructorContext

# Function: createConstructorContext()

```ts
function createConstructorContext<PS>(initialPrivateState, coinPublicKey): ConstructorContext<PS>;
```

Creates a new [ConstructorContext](../interfaces/ConstructorContext.md) with the given initial private state and an empty Zswap local state.

## Type Parameters

### PS

`PS`

## Parameters

### initialPrivateState

`PS`

The private state to use to execute the contract's constructor.

### coinPublicKey

The Zswap coin public key of the user executing the contract.

`string` | [`EncodedCoinPublicKey`](../interfaces/EncodedCoinPublicKey.md)

## Returns

[`ConstructorContext`](../interfaces/ConstructorContext.md)\<`PS`\>
