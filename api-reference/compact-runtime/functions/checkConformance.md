[**@midnight-ntwrk/compact-runtime v0.21.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / checkConformance

# Function: checkConformance()

```ts
function checkConformance(declaration, implementation): ConformanceResult;
```

Check a resolved module against the contract type its caller declared, returning the first thing
that went wrong, or `Conformant`.

A module may implement more circuits than the declaration names, but not fewer and not
differently. A declared circuit must have a proof, so its implementation must be provable; a pure
implementation is not.

Only the implementation is screened for readability; the declaration comes from the caller's own
module, which is version-locked to this runtime.

## Parameters

### declaration

[`InterfaceDescriptor`](../type-aliases/InterfaceDescriptor.md)

The caller's `declaredInterfaces[T]` for the contract type being called through.

### implementation

[`CircuitSignatures`](../type-aliases/CircuitSignatures.md)

The resolved module's `circuitSignatures`.

## Returns

[`ConformanceResult`](../type-aliases/ConformanceResult.md)
