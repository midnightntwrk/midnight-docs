[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ZswapCoinPublicKeyDescriptor

# Variable: ZswapCoinPublicKeyDescriptor

```ts
const ZswapCoinPublicKeyDescriptor: {
  alignment: Alignment;
  fromValue: {
     bytes: Uint8Array;
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
  bytes: Uint8Array;
};
```

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

```ts
{
  bytes: Uint8Array;
}
```

##### bytes

```ts
bytes: Uint8Array;
```

### toValue()

```ts
toValue(value): Value;
```

#### Parameters

##### value

###### bytes

`Uint8Array`

#### Returns

[`Value`](../type-aliases/Value.md)
