[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ConformanceCheck

# Type Alias: ConformanceCheck

```ts
type ConformanceCheck = 
  | "Existence"
  | "Purity"
  | "Provability"
  | "Arity"
  | "ArgumentType"
  | "ResultType";
```

Which rule a module failed. Ordered as they are applied, per circuit.
