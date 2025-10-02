[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / encodeQualifiedCoinInfo

# Function: encodeQualifiedCoinInfo()

```ts
function encodeQualifiedCoinInfo(coin): {
  color: Uint8Array;
  mt_index: bigint;
  nonce: Uint8Array;
  value: bigint;
};
```

Encode a [QualifiedCoinInfo](../type-aliases/QualifiedCoinInfo.md) into a Compact's `QualifiedCoinInfo`
TypeScript representation

## Parameters

### coin

[`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

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
