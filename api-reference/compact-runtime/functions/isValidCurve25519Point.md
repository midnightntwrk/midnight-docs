[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / isValidCurve25519Point

# Function: isValidCurve25519Point()

```ts
function isValidCurve25519Point(p): p is Curve25519Point;
```

Check whether a value is a valid `Curve25519Point`: an object whose `x` and
`y` are bigints in the base field and which lies in the prime-order subgroup
of the curve. The identity is the ordinary affine point (0, 1).

## Parameters

### p

`unknown`

## Returns

`p is Curve25519Point`
