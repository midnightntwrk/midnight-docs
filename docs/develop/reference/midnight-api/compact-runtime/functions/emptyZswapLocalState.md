[**@midnight-ntwrk/compact-runtime v0.14.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / emptyZswapLocalState

# Function: emptyZswapLocalState()

```ts
function emptyZswapLocalState(coinPublicKey): EncodedZswapLocalState;
```

Constructs a new [EncodedZswapLocalState](../interfaces/EncodedZswapLocalState.md) with the given coin public key. The result can be used to create a
[ConstructorContext](../interfaces/ConstructorContext.md).

## Parameters

### coinPublicKey

The Zswap coin public key of the user executing the circuit.

`string` | [`EncodedCoinPublicKey`](../interfaces/EncodedCoinPublicKey.md)

## Returns

[`EncodedZswapLocalState`](../interfaces/EncodedZswapLocalState.md)
