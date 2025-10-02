[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / decodeZswapLocalState

# Function: decodeZswapLocalState()

```ts
function decodeZswapLocalState(state): ZswapLocalState;
```

Converts an [EncodedZswapLocalState](../interfaces/EncodedZswapLocalState.md) to a [ZswapLocalState](../interfaces/ZswapLocalState.md). Used when we need to use data from contract
execution to construct transactions.

## Parameters

### state

[`EncodedZswapLocalState`](../interfaces/EncodedZswapLocalState.md)

The encoded Zswap local state.

## Returns

[`ZswapLocalState`](../interfaces/ZswapLocalState.md)
