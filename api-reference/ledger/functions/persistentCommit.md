[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / persistentCommit

# Function: persistentCommit()

```ts
function persistentCommit(
   align, 
   val, 
   opening): Value;
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

If [val](#persistentcommit) does not have alignment [align](#persistentcommit),
[opening](#persistentcommit) does not encode a 32-byte bytestring, or any component has a
compress alignment
