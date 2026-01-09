[**@midnight-ntwrk/compact-runtime v0.14.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / runProgram

# Function: runProgram()

```ts
function runProgram(
   initial, 
   ops, 
   cost_model, 
   gas_limit?): VmResults;
```

Runs a VM program against an initial stack, with an optional gas limit

## Parameters

### initial

[`VmStack`](../classes/VmStack.md)

### ops

[`Op`](../type-aliases/Op.md)\<`null`\>[]

### cost\_model

[`CostModel`](../classes/CostModel.md)

### gas\_limit?

[`RunningCost`](../type-aliases/RunningCost.md)

## Returns

[`VmResults`](../classes/VmResults.md)
