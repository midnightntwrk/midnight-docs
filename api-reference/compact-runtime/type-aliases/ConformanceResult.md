[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ConformanceResult

# Type Alias: ConformanceResult

```ts
type ConformanceResult = 
  | {
  outcome: "Conformant";
}
  | {
  outcome: "Violation";
} & ConformanceViolation
  | {
  outcome: "Unreadable";
} & UnreadableSignature;
```

The outcome of checking a module against a contract type. Tagged, so a call site has to handle
 all three.
