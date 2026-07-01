[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CallProofDataTrace

# Type Alias: CallProofDataTrace

```ts
type CallProofDataTrace = CallProofData[];
```

List of data needed to construct proofs and transactions for all circuit calls
resulting from executing a root circuit. The calls are in depth-first traversal order.
In other words, the first circuit to complete execution is first, and the last circuit
to complete execution (the root circuit) is last.
