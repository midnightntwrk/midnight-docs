[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / persistentHash

# Function: persistentHash()

```ts
function persistentHash(align, val): Value;
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

If [val](#persistenthash) does not have alignment [align](#persistenthash), or any
component has a compress alignment
