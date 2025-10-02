[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / Recipient

# Interface: Recipient

The recipient of a coin produced by a circuit.

## Properties

### is\_left

```ts
readonly is_left: boolean;
```

Whether the recipient is a user or a contract.

***

### left

```ts
readonly left: string;
```

The recipient's public key, if the recipient is a user.

***

### right

```ts
readonly right: string;
```

The recipient's contract address, if the recipient is a contract.
