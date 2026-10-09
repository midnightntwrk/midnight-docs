[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / InterfaceCircuitDeclaration

# Type Alias: InterfaceCircuitDeclaration

```ts
type InterfaceCircuitDeclaration = {
  argumentTypes: readonly SignatureType[];
  pure: boolean;
  resultType: SignatureType;
};
```

One circuit as *declared* in a `contract T { }` block. `pure` is the declared keyword, not inferred purity.

## Properties

### argumentTypes

```ts
readonly argumentTypes: readonly SignatureType[];
```

***

### pure

```ts
readonly pure: boolean;
```

***

### resultType

```ts
readonly resultType: SignatureType;
```
