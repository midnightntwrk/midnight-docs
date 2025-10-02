[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CoinRecipientDescriptor

# Variable: CoinRecipientDescriptor

```ts
const CoinRecipientDescriptor: {
  alignment: Alignment;
  fromValue: {
     is_left: boolean;
     left: {
        bytes: Uint8Array;
     };
     right: {
        bytes: Uint8Array;
     };
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
  is_left: boolean;
  left: {
     bytes: Uint8Array;
  };
  right: {
     bytes: Uint8Array;
  };
};
```

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

```ts
{
  is_left: boolean;
  left: {
     bytes: Uint8Array;
  };
  right: {
     bytes: Uint8Array;
  };
}
```

##### is\_left

```ts
is_left: boolean;
```

##### left

```ts
left: {
  bytes: Uint8Array;
};
```

###### left.bytes

```ts
bytes: Uint8Array;
```

##### right

```ts
right: {
  bytes: Uint8Array;
};
```

###### right.bytes

```ts
bytes: Uint8Array;
```

### toValue()

```ts
toValue(value): Value;
```

#### Parameters

##### value

###### is_left

`boolean`

###### left

\{
  `bytes`: `Uint8Array`;
\}

###### left.bytes

`Uint8Array`

###### right

\{
  `bytes`: `Uint8Array`;
\}

###### right.bytes

`Uint8Array`

#### Returns

[`Value`](../type-aliases/Value.md)
