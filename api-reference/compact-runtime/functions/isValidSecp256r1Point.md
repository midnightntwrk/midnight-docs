[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / isValidSecp256r1Point

# Function: isValidSecp256r1Point()

```ts
function isValidSecp256r1Point(p): p is Secp256r1Point;
```

Check whether a value is a valid `Secp256r1Point`: an object whose `x` and `y`
are bigints in the base field and whose `identity` is a boolean. A point that
is not the identity must also lie on the curve.

## Parameters

### p

`unknown`

## Returns

`p is Secp256r1Point`
