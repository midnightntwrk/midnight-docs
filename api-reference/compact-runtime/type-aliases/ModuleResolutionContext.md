[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ModuleResolutionContext

# Type Alias: ModuleResolutionContext

```ts
type ModuleResolutionContext = {
  calleeAddress: ContractAddress;
  calleeCircuitId: CircuitId;
  callerAddress: ContractAddress;
  interfaceName: string;
};
```

Which call failed, and through which contract type.

## Properties

### calleeAddress

```ts
readonly calleeAddress: ContractAddress;
```

***

### calleeCircuitId

```ts
readonly calleeCircuitId: CircuitId;
```

***

### callerAddress

```ts
readonly callerAddress: ContractAddress;
```

***

### interfaceName

```ts
readonly interfaceName: string;
```

The caller's local name for the contract type. Nothing on the callee's side is matched against
 it, since it has no name to offer.
