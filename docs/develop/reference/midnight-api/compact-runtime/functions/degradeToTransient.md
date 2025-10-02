[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / degradeToTransient

# Function: degradeToTransient()

```ts
function degradeToTransient(x): bigint;
```

The Compact builtin `degrade_to_transient` function

This function "degrades" the output of a [persistentHash](persistentHash.md) or
[persistentCommit](persistentCommit.md) to a field element, which can then be used in
[transientHash](transientHash.md) or [transientCommit](transientCommit.md).

## Parameters

### x

`Uint8Array`

## Returns

`bigint`

## Throws

If `x` is not 32 bytes long
