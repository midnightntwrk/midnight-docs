[**@midnight-ntwrk/onchain-runtime v2.0.1**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / runProgram

# Function: runProgram()

```ts
function runProgram(
   initial, 
   ops, 
   cost_model, 
   gas_limit?): VmResults
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
