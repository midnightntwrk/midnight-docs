**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / runProgram

# Function: runProgram()

```ts
runProgram(
   initial, 
   ops, 
   cost_model, 
   gas_limit?): VmResults
```

Runs a VM program against an initial stack, with an optional gas limit

## Parameters

• **initial**: [`VmStack`](../classes/VmStack.md)

• **ops**: [`Op`](../type-aliases/Op.md)\<`null`\>[]

• **cost\_model**: [`CostModel`](../classes/CostModel.md)

• **gas\_limit?**: `bigint`

## Returns

[`VmResults`](../classes/VmResults.md)
