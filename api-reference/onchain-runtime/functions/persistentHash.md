[**@midnight-ntwrk/onchain-runtime v2.0.1**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / persistentHash

# Function: persistentHash()

```ts
function persistentHash(align, val): Value
```

**`Internal`**

Internal implementation of the persistent hash primitive

## Parameters

### align

[`Alignment`](../type-aliases/Alignment.md)

### val

[`Value`](../type-aliases/Value.md)

## Returns

[`Value`](../type-aliases/Value.md)

## Throws

If [val](persistentHash.md#val) does not have alignment [align](persistentHash.md#align), or any
component has a compress alignment
