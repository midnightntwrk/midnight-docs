[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / Module

# Type Alias: Module

```ts
type Module = {
  circuitSignatures: CircuitSignatures;
  Contract: ContractCtor;
  declaredInterfaces: DeclaredInterfaces;
  expectedVk: Readonly<Record<CircuitId, string>>;
  pureCircuits: PureCircuits;
};
```

The exports of a generated `contract/index.js` that the runtime needs from a cross-contract
callee. A module missing the data exports predates dynamic resolution.

## Properties

### circuitSignatures

```ts
readonly circuitSignatures: CircuitSignatures;
```

What this module implements.

***

### Contract

```ts
readonly Contract: ContractCtor;
```

***

### declaredInterfaces

```ts
readonly declaredInterfaces: DeclaredInterfaces;
```

The contract types this module itself calls through.

***

### expectedVk

```ts
readonly expectedVk: Readonly<Record<CircuitId, string>>;
```

Verifier-key fingerprints by external circuit name, compared against what is deployed.

***

### pureCircuits

```ts
readonly pureCircuits: PureCircuits;
```

Read nowhere: a pure circuit in a contract type cannot be called, so nothing dispatches through
this, and it is absent from the runtime's required exports so a module need not carry one.
TODO: drop it, unless pure cross-contract calls are made sound — see `PureInterfaceCircuit`.
