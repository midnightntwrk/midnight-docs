[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / persistentCommit

# Function: persistentCommit()

```ts
function persistentCommit<a>(
   rt_type, 
   value, 
   opening): Uint8Array;
```

The Compact builtin `persistent_commit` function

This function is a non-circuit-optimised commitment function from arbitrary
values representable in Compact, and a 256-bit bytestring opening, to a
256-bit bytestring. It is guaranteed to persist between upgrades. It
*should* be used to derive state data, and not for consistency checks where
avoidable.

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

### opening

`Uint8Array`

## Returns

`Uint8Array`

## Throws

If `rt_type` encodes a type containing Compact 'Opaque' types, or
`opening` is not 32 bytes long
