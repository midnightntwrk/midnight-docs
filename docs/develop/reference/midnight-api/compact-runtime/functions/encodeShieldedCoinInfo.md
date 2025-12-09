[**@midnight-ntwrk/compact-runtime v0.11.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / encodeShieldedCoinInfo

# Function: encodeShieldedCoinInfo()

```ts
function encodeShieldedCoinInfo(coin): {
  color: Uint8Array;
  nonce: Uint8Array;
  value: bigint;
};
```

Encode a [ShieldedCoinInfo](../type-aliases/ShieldedCoinInfo.md) into a Compact's `ShieldedCoinInfo` TypeScript
representation

## Parameters

### coin

[`ShieldedCoinInfo`](../type-aliases/ShieldedCoinInfo.md)

## Returns

```ts
{
  color: Uint8Array;
  nonce: Uint8Array;
  value: bigint;
}
```

### color

```ts
color: Uint8Array;
```

### nonce

```ts
nonce: Uint8Array;
```

### value

```ts
value: bigint;
```
