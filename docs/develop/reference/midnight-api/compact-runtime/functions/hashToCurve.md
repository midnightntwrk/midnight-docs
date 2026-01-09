[**@midnight-ntwrk/compact-runtime v0.14.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / hashToCurve

# Function: hashToCurve()

```ts
function hashToCurve<A>(rtType, x): NativePoint;
```

The Compact builtin `hash_to_curve` function

This function maps arbitrary values representable in Compact to elliptic
curve points in the proof system's embedded curve.

Outputs are guaranteed to have unknown discrete logarithm with respect to
the group base, and any other output, but are not guaranteed to be unique (a
given input can be proven correct for multiple outputs).

Inputs of different types may have the same output, if they have the same
field-aligned binary representation.

## Type Parameters

### A

`A`

## Parameters

### rtType

[`CompactType`](../interfaces/CompactType.md)\<`A`\>

### x

`A`

## Returns

[`NativePoint`](../interfaces/NativePoint.md)
