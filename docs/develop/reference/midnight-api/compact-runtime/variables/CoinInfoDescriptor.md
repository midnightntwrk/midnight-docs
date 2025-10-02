[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CoinInfoDescriptor

# Variable: CoinInfoDescriptor

```ts
const CoinInfoDescriptor: {
  alignment: Alignment;
  fromValue: {
     color: Uint8Array;
     nonce: Uint8Array;
     value: bigint;
  };
  toValue: Value;
};
```

## Type declaration

### alignment()

```ts
alignment(): Alignment;
```

#### Returns

[`Alignment`](../type-aliases/Alignment.md)

### fromValue()

```ts
fromValue(value): {
  color: Uint8Array;
  nonce: Uint8Array;
  value: bigint;
};
```

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

```ts
{
  color: Uint8Array;
  nonce: Uint8Array;
  value: bigint;
}
```

##### color

```ts
color: Uint8Array;
```

##### nonce

```ts
nonce: Uint8Array;
```

##### value

```ts
value: bigint;
```

### toValue()

```ts
toValue(value): Value;
```

#### Parameters

##### value

###### color

`Uint8Array`

###### nonce

`Uint8Array`

###### value

`bigint`

#### Returns

[`Value`](../type-aliases/Value.md)
