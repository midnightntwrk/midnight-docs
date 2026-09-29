[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CrossContractCallOptions

# Type Alias: CrossContractCallOptions

```ts
type CrossContractCallOptions = {
  args: readonly any[];
  calleeAddress: ContractAddress;
  calleeCircuitId: CircuitId;
  context: CircuitContext;
  declaration: InterfaceDescriptor;
  interfaceName: string;
  partialProofData: PartialProofData;
};
```

The call site's side of a cross-contract call, as emitted by `compactc`.

## Properties

### args

```ts
readonly args: readonly any[];
```

Arguments to the circuit being called.

***

### calleeAddress

```ts
readonly calleeAddress: ContractAddress;
```

On-chain address of contract being called.

***

### calleeCircuitId

```ts
readonly calleeCircuitId: CircuitId;
```

String identifier of the circuit being called.

***

### context

```ts
readonly context: CircuitContext;
```

The caller's circuit context. Mutated in place for the duration of the sub-call.

***

### declaration

```ts
readonly declaration: InterfaceDescriptor;
```

The caller's `declaredInterfaces[interfaceName]`.

***

### interfaceName

```ts
readonly interfaceName: string;
```

The caller's local name for the contract type, used in diagnostics.

***

### partialProofData

```ts
readonly partialProofData: PartialProofData;
```

The proof data created when the caller's circuit was initialized.
