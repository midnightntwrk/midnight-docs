[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ProvableCircuit

# Type Alias: ProvableCircuit()

```ts
type ProvableCircuit = (context, ...args) => Promise<CircuitResults>;
```

A circuit that threads the circuit context and produces proof data. `any[]` per [PureCircuit](PureCircuit.md).

## Parameters

### context

[`CircuitContext`](../interfaces/CircuitContext.md)

### args

...`any`[]

## Returns

`Promise`\<[`CircuitResults`](../interfaces/CircuitResults.md)\>
