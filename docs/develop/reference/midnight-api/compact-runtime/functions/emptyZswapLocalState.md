[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

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

`string`

The Zswap coin public key of the user executing the circuit.

## Returns

[`EncodedZswapLocalState`](../interfaces/EncodedZswapLocalState.md)
