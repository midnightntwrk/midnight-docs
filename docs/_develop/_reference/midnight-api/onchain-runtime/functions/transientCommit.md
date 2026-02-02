**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / transientCommit

# Function: transientCommit()

`Internal`

```ts
transientCommit(
   align, 
   val, 
   opening): Value
```

Internal implementation of the transient commitment primitive

## Parameters

• **align**: [`Alignment`](../type-aliases/Alignment.md)

• **val**: [`Value`](../type-aliases/Value.md)

• **opening**: [`Value`](../type-aliases/Value.md)

## Returns

[`Value`](../type-aliases/Value.md)

## Throws

If val does not have alignment align, or
opening does not encode a field element
