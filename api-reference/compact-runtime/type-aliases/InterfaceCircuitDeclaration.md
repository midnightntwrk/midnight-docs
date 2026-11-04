[**@midnight-ntwrk/compact-runtime v0.21.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / InterfaceCircuitDeclaration

# Type Alias: InterfaceCircuitDeclaration

```ts
type InterfaceCircuitDeclaration = {
  argumentTypes: readonly SignatureType[];
  resultType: SignatureType;
};
```

One circuit as *declared* in a `contract T { }` block: a circuit with this signature and a proof.

## Properties

### argumentTypes

```ts
readonly argumentTypes: readonly SignatureType[];
```

***

### resultType

```ts
readonly resultType: SignatureType;
```
