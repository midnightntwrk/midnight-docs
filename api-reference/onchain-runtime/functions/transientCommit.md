[**@midnight-ntwrk/onchain-runtime v2.0.1**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / transientCommit

# Function: transientCommit()

```ts
function transientCommit(
   align, 
   val, 
   opening): Value
```

**`Internal`**

Internal implementation of the transient commitment primitive

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

If [val](transientCommit.md#val) does not have alignment [align](transientCommit.md#align), or
[opening](transientCommit.md#opening) does not encode a field element
