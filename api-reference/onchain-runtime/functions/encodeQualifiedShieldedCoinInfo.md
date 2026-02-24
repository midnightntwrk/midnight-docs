[**@midnight-ntwrk/onchain-runtime v2.0.0-rc.2**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / encodeQualifiedShieldedCoinInfo

# Function: encodeQualifiedShieldedCoinInfo()

```ts
function encodeQualifiedShieldedCoinInfo(coin): {
  color: Uint8Array;
  mt_index: bigint;
  nonce: Uint8Array;
  value: bigint;
}
```

Encode a [QualifiedShieldedCoinInfo](../type-aliases/QualifiedShieldedCoinInfo.md) into a Compact's `QualifiedShieldedCoinInfo`
TypeScript representation

## Parameters

### coin

[`QualifiedShieldedCoinInfo`](../type-aliases/QualifiedShieldedCoinInfo.md)

## Returns

```ts
{
  color: Uint8Array;
  mt_index: bigint;
  nonce: Uint8Array;
  value: bigint;
}
```

### color

```ts
color: Uint8Array;
```

### mt\_index

```ts
mt_index: bigint;
```

### nonce

```ts
nonce: Uint8Array;
```

### value

```ts
value: bigint;
```
