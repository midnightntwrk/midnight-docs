[**@midnight-ntwrk/compact-runtime v0.21.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ProvableCircuit

# Type Alias: ProvableCircuit()

```ts
type ProvableCircuit = (context, ...args) => Promise<CircuitResults>;
```

A circuit that threads the circuit context and produces proof data.

`any[]` because parameters are contravariant: `unknown[]` accepts no real circuit and `never[]`
can't be called. The result is `any` to match.

## Parameters

### context

[`CircuitContext`](../interfaces/CircuitContext.md)

### args

...`any`[]

## Returns

`Promise`\<[`CircuitResults`](../interfaces/CircuitResults.md)\>
