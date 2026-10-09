[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CircuitSignature

# Type Alias: CircuitSignature

```ts
type CircuitSignature = InterfaceCircuitDeclaration & {
  provable: boolean;
};
```

One circuit as *implemented*. `pure` is inferred purity; `provable` means a proof can be
 generated for it. Disjoint but not exhaustive: a circuit that only calls a witness is neither.

## Type Declaration

### provable

```ts
readonly provable: boolean;
```
