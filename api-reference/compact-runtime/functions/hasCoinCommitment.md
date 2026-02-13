[**@midnight-ntwrk/compact-runtime v0.14.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / hasCoinCommitment

# Function: hasCoinCommitment()

```ts
function hasCoinCommitment(
   context, 
   coinInfo, 
   recipient): boolean;
```

Checks whether a coin commitment has already been added to the current query context.

## Parameters

### context

[`CircuitContext`](../interfaces/CircuitContext.md)

The current circuit context.

### coinInfo

[`EncodedShieldedCoinInfo`](../interfaces/EncodedShieldedCoinInfo.md)

The coin information to check.

### recipient

[`EncodedRecipient`](../interfaces/EncodedRecipient.md)

The coin recipient to check.

## Returns

`boolean`
