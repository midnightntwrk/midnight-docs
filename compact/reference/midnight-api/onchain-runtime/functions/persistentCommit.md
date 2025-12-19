**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / persistentCommit

# Function: persistentCommit()

`Internal`

```ts
persistentCommit(
   align, 
   val, 
   opening): Value
```

Internal implementation of the persistent commitment primitive

## Parameters

• **align**: [`Alignment`](../type-aliases/Alignment.md)

• **val**: [`Value`](../type-aliases/Value.md)

• **opening**: [`Value`](../type-aliases/Value.md)

## Returns

[`Value`](../type-aliases/Value.md)

## Throws

If val does not have alignment align,
opening does not encode a 32-byte bytestring, or any component has a
compress alignment
