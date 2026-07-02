[**@midnight-ntwrk/compact-runtime v0.18.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / keccak256

# Function: keccak256()

```ts
function keccak256<A>(rtType, value): Uint8Array;
```

The Compact builtin `keccak256` function

Hashes `value` using Keccak-256 and returns the 32-byte digest.

## Type Parameters

### A

`A`

## Parameters

### rtType

[`CompactType`](../interfaces/CompactType.md)\<`A`\>

### value

`A`

## Returns

`Uint8Array`

## Throws

If `rtType` encodes a type containing Compact 'Opaque' types
