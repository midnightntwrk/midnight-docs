[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / curve25519ToProjective

# Function: curve25519ToProjective()

```ts
function curve25519ToProjective(p): EdwardsPoint;
```

**`Internal`**

Lift the simple affine `Curve25519Point` representation into a noble-curves
projective point. The point is assumed to be valid, points passed from
compiler-generated code are always valid ones.

## Parameters

### p

[`Curve25519Point`](../interfaces/Curve25519Point.md)

## Returns

`EdwardsPoint`
