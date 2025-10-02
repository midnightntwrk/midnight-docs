[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / upgradeFromTransient

# Function: upgradeFromTransient()

```ts
function upgradeFromTransient(x): Uint8Array;
```

The Compact builtin `upgrade_from_transient` function

This function "upgrades" the output of a [transientHash](transientHash.md) or
[transientCommit](transientCommit.md) to 256-bit byte string, which can then be used in
[persistentHash](persistentHash.md) or [persistentCommit](persistentCommit.md).

## Parameters

### x

`bigint`

## Returns

`Uint8Array`

## Throws

If `x` is not a valid field element
