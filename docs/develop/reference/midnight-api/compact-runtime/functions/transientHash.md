[**@midnight-ntwrk/compact-runtime v0.11.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / transientHash

# Function: transientHash()

```ts
function transientHash<A>(rtType, value): bigint;
```

The Compact builtin `transient_hash` function

This function is a circuit-efficient compression function from arbitrary
data to field elements, which is not guaranteed to persist between upgrades.
It should not be used to derive state data, but can be used for consistency
checks.

## Type Parameters

### A

`A`

## Parameters

### rtType

[`CompactType`](../interfaces/CompactType.md)\<`A`\>

### value

`A`

## Returns

`bigint`
