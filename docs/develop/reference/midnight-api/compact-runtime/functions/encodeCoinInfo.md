[**@midnight-ntwrk/compact-runtime v0.10.1**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / encodeCoinInfo

# Function: encodeCoinInfo()

```ts
function encodeCoinInfo(coin): {
  color: Uint8Array;
  nonce: Uint8Array;
  value: bigint;
};
```

Encode a [CoinInfo](../type-aliases/CoinInfo.md) into a Compact's `CoinInfo` TypeScript
representation

## Parameters

### coin

[`CoinInfo`](../type-aliases/CoinInfo.md)

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
