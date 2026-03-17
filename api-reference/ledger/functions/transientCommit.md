[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / transientCommit

# Function: transientCommit()

```ts
function transientCommit(
   align, 
   val, 
   opening): Value;
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

If [val](#transientcommit) does not have alignment [align](#transientcommit), or
[opening](#transientcommit) does not encode a field element
