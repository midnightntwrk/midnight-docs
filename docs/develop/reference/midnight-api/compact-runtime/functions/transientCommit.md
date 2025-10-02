[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / transientCommit

# Function: transientCommit()

```ts
function transientCommit<a>(
   rt_type, 
   value, 
   opening): bigint;
```

The Compact builtin `transient_commit` function

This function is a circuit-efficient commitment function from arbitrary
values representable in Compact, and a field element commitment opening, to
field elements, which is not guaranteed to persist between
upgrades. It should not be used to derive state data, but can be used for
consistency checks.

## Type Parameters

### a

`a`

## Parameters

### rt\_type

[`CompactType`](../interfaces/CompactType.md)\<`a`\>

### value

`a`

### opening

`bigint`

## Returns

`bigint`

## Throws

If `opening` is out of range for field elements
