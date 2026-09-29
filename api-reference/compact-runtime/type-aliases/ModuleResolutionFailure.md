[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ModuleResolutionFailure

# Type Alias: ModuleResolutionFailure

```ts
type ModuleResolutionFailure = 
  | {
  kind: "ModuleProviderAbsent";
}
  | {
  kind: "PureInterfaceCircuit";
}
  | {
  kind: "OperationAbsent";
}
  | {
  kind: "UnsupportedImplementation";
}
  | {
  cause: unknown;
  kind: "ProviderThrew";
}
  | {
  kind: "NonconformantImplementation";
} & ConformanceViolation
  | {
  kind: "UnreadableModule";
} & UnreadableSignature
  | {
  circuitId: CircuitId;
  kind: "MalformedVerifierKeyHash";
  recorded: string;
}
  | {
  actual: VerifierKeyHash;
  circuitId: CircuitId;
  expected?: VerifierKeyHash;
  kind: "ImplementationMismatch";
}
  | {
  cause: unknown;
  kind: "ModuleLoadRejected";
}
  | {
  kind: "IncompleteModule";
  missing: readonly keyof Module[];
};
```

The reason a call could not be bound to an implementation. Raised by the runtime, never
constructed by an application. A payload rather than an error subclass, so it survives an
application re-throwing through its own error type.

## Type Declaration

```ts
{
  kind: "ModuleProviderAbsent";
}
```

### kind

```ts
readonly kind: "ModuleProviderAbsent";
```

The circuit context carries no module provider.

```ts
{
  kind: "PureInterfaceCircuit";
}
```

### kind

```ts
readonly kind: "PureInterfaceCircuit";
```

The contract type declares the called circuit `pure`, so it has no
 verifier key and is never a deployed operation. The compiler accepts the
 declaration and the call, so this is where one stops.

 TODO: reject the declaration at compile time instead. A pure call has no
 transcript, so its result reaches the caller's proof unconstrained.

```ts
{
  kind: "OperationAbsent";
}
```

### kind

```ts
readonly kind: "OperationAbsent";
```

The contract deployed at the callee's address has no operation for this
 circuit, or its operation carries no verifier key.

```ts
{
  kind: "UnsupportedImplementation";
}
```

### kind

```ts
readonly kind: "UnsupportedImplementation";
```

The provider returned `undefined`: the application has no binding for this
 address.

```ts
{
  cause: unknown;
  kind: "ProviderThrew";
}
```

### cause

```ts
readonly cause: unknown;
```

### kind

```ts
readonly kind: "ProviderThrew";
```

`resolve` threw, or returned something that is neither a thunk nor
 `undefined`. A defect in the provider.

\{
  `kind`: `"NonconformantImplementation"`;
\} & [`ConformanceViolation`](ConformanceViolation.md)

The resolved module does not implement the caller's contract type.
 `check` names the rule that failed.

\{
  `kind`: `"UnreadableModule"`;
\} & [`UnreadableSignature`](UnreadableSignature.md)

The module's signatures use a type constructor this runtime doesn't know, so it can't be
 compared. See [UnreadableSignature](UnreadableSignature.md).

```ts
{
  circuitId: CircuitId;
  kind: "MalformedVerifierKeyHash";
  recorded: string;
}
```

### circuitId

```ts
readonly circuitId: CircuitId;
```

### kind

```ts
readonly kind: "MalformedVerifierKeyHash";
```

### recorded

```ts
readonly recorded: string;
```

What the module recorded, verbatim.

The module's recorded fingerprint for this circuit is not a verifier key hash. A defect in the
 module's build.

```ts
{
  actual: VerifierKeyHash;
  circuitId: CircuitId;
  expected?: VerifierKeyHash;
  kind: "ImplementationMismatch";
}
```

### actual

```ts
readonly actual: VerifierKeyHash;
```

### circuitId

```ts
readonly circuitId: CircuitId;
```

### expected?

```ts
readonly optional expected: VerifierKeyHash;
```

### kind

```ts
readonly kind: "ImplementationMismatch";
```

The module's verifier key hash for this circuit disagrees with the deployed one. `expected` is
 absent when the module has no `expectedVk` entry for the circuit.

```ts
{
  cause: unknown;
  kind: "ModuleLoadRejected";
}
```

### cause

```ts
readonly cause: unknown;
```

### kind

```ts
readonly kind: "ModuleLoadRejected";
```

Awaiting the thunk rejected; `cause` is what it rejected with.

```ts
{
  kind: "IncompleteModule";
  missing: readonly keyof Module[];
}
```

### kind

```ts
readonly kind: "IncompleteModule";
```

### missing

```ts
readonly missing: readonly keyof Module[];
```

The thunk resolved to something without the exports resolution reads. A module built before
 dynamic resolution has a `Contract` and none of the tables.
