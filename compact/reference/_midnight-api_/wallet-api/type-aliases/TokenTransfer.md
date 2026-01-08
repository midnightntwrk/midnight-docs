**@midnight-ntwrk/wallet-api v5.0.0** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/wallet-api v5.0.0](../README.md) / TokenTransfer

# Type alias: TokenTransfer

```ts
type TokenTransfer: {
  amount: bigint;
  receiverAddress: Address;
  type: TokenType;
};
```

Data for transferring tokens

## Type declaration

### amount

```ts
readonly amount: bigint;
```

Amount of transferred tokens

#### Remarks

It is a non-negative integer, which represents the amount of tokens to be transferred. The smallest unit that can be transferred is 1.

### receiverAddress

```ts
readonly receiverAddress: Address;
```

[Address](Address.md) of receiver

### type

```ts
readonly type: TokenType;
```

[TokenType](TokenType.md) of transferred token
