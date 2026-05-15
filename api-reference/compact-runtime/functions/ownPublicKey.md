[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ownPublicKey

# Function: ownPublicKey()

```ts
function ownPublicKey(circuitContext): EncodedCoinPublicKey;
```

Retrieves the Zswap coin public key of the user executing the circuit.

:::warning Do not use `ownPublicKey()` for caller verification

`ownPublicKey()` is a **witness function** — it runs outside zero-knowledge circuits and each user provides their own implementation. Do **not** use it to verify callers in Compact circuits. Only use it after the caller has been verified through another mechanism.

See the [Smart Contract Security Guide](../../docs/compact/smart-contract-security.mdx#ownpublickey-is-a-witness-function) for details.

:::

## Parameters

### circuitContext

[`CircuitContext`](../interfaces/CircuitContext.md)\<`unknown`\>

The current circuit context.

## Returns

[`EncodedCoinPublicKey`](../interfaces/EncodedCoinPublicKey.md)
