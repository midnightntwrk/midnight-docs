[**@midnight-ntwrk/compact-runtime v0.10.1**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / transientCommit

# Function: transientCommit()

```ts
function transientCommit<A>(
   rtType, 
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

### A

`A`

## Parameters

### rtType

[`CompactType`](../interfaces/CompactType.md)\<`A`\>

### value

`A`

### opening

`bigint`

## Returns

`bigint`

## Throws

If `opening` is out of range for field elements
