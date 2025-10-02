[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / persistentHash

# Function: persistentHash()

```ts
function persistentHash<a>(rt_type, value): Uint8Array;
```

The Compact builtin `persistent_hash` function

This function is a non-circuit-optimised hash function for mostly arbitrary
data. It is guaranteed to persist between upgrades, with the exception of
devnet. It *should* be used to derive state data, and not for consistency
checks where avoidable.

Note that data containing `Opaque` elements *may* throw runtime errors, and
cannot be relied upon as a consistent representation.

## Type Parameters

### a

`a`

## Parameters

### rt\_type

[`CompactType`](../interfaces/CompactType.md)\<`a`\>

### value

`a`

## Returns

`Uint8Array`

## Throws

If `rt_type` encodes a type containing Compact 'Opaque' types
