[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / createCircuitContext

# Function: createCircuitContext()

```ts
function createCircuitContext<PS>(__namedParameters): CircuitContext<PS>;
```

Entry point for constructing the [CircuitContext](../interfaces/CircuitContext.md) to pass as an argument to a circuit. Always
use this function to set up the initial circuit context.

## Type Parameters

### PS

`PS`

## Parameters

### \_\_namedParameters

[`CircuitContextOptions`](../type-aliases/CircuitContextOptions.md)\<`PS`\>

## Returns

[`CircuitContext`](../interfaces/CircuitContext.md)\<`PS`\>
