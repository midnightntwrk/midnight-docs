[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / EncodedRecipient

# Interface: EncodedRecipient

A [Recipient](Recipient.md) with its fields encoded as byte strings. This representation is used internally by the contract executable.

## Properties

### is\_left

```ts
readonly is_left: boolean;
```

Whether the recipient is a user or a contract.

***

### left

```ts
readonly left: EncodedCoinPublicKey;
```

The recipient's public key, if the recipient is a user.

***

### right

```ts
readonly right: EncodedContractAddress;
```

The recipient's contract address, if the recipient is a contract.
