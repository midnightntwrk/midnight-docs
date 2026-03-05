[**@midnight-ntwrk/onchain-runtime v2.0.1**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / persistentCommit

# Function: persistentCommit()

```ts
function persistentCommit(
   align, 
   val, 
   opening): Value
```

**`Internal`**

Internal implementation of the persistent commitment primitive

## Parameters

### align

[`Alignment`](../type-aliases/Alignment.md)

### val

[`Value`](../type-aliases/Value.md)

### opening

[`Value`](../type-aliases/Value.md)

## Returns

[`Value`](../type-aliases/Value.md)

## Throws

If [val](persistentCommit.md#val) does not have alignment [align](persistentCommit.md#align),
[opening](persistentCommit.md#opening) does not encode a 32-byte bytestring, or any component has a
compress alignment
