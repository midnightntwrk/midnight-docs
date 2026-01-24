**@midnight-ntwrk/wallet-api v5.0.0** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/wallet-api v5.0.0](../README.md) / WalletState

# Type alias: WalletState

```ts
type WalletState: {
  address: Address;
  addressLegacy: AddressLegacy;
  availableCoins: QualifiedCoinInfo[];
  balances: Record<TokenType, bigint>;
  coinPublicKey: CoinPublicKey;
  coinPublicKeyLegacy: CoinPublicKeyLegacy;
  coins: QualifiedCoinInfo[];
  encryptionPublicKey: EncPublicKey;
  encryptionPublicKeyLegacy: EncPublicKeyLegacy;
  nullifiers: Nullifier[];
  pendingCoins: CoinInfo[];
  syncProgress: SyncProgress | undefined;
  transactionHistory: TransactionHistoryEntry[];
};
```

Wallet state information

## Remarks

WalletState is a data structure used for storing wallet state information, such as wallet coins, balances, transaction history, etc.

## Type declaration

### address

```ts
readonly address: Address;
```

Wallet [address](Address.md)

### addressLegacy

```ts
readonly addressLegacy: AddressLegacy;
```

Wallet [address](AddressLegacy.md)

### availableCoins

```ts
readonly availableCoins: QualifiedCoinInfo[];
```

All available wallet coins that can be spent immediately.

### balances

```ts
readonly balances: Record<TokenType, bigint>;
```

A map of balances for all available coins, where the key is a [TokenType](TokenType.md) and the value is a balance.
Note that this won't list any zero balance coins

### coinPublicKey

```ts
readonly coinPublicKey: CoinPublicKey;
```

Wallet [CoinPublicKey](CoinPublicKey.md)

### coinPublicKeyLegacy

```ts
readonly coinPublicKeyLegacy: CoinPublicKeyLegacy;
```

Wallet [CoinPublicKeyLegacy](CoinPublicKeyLegacy.md)

### coins

```ts
readonly coins: QualifiedCoinInfo[];
```

All wallet coins (including those which are pending to spend)

### encryptionPublicKey

```ts
readonly encryptionPublicKey: EncPublicKey;
```

Wallet EncryptionPublicKey

### encryptionPublicKeyLegacy

```ts
readonly encryptionPublicKeyLegacy: EncPublicKeyLegacy;
```

Wallet [EncPublicKeyLegacy](EncPublicKeyLegacy.md)

### nullifiers

```ts
readonly nullifiers: Nullifier[];
```

Nullifiers corresponding to the coins.
For `0 <= i < coins.length`,  nullifiers[i] corresponds to coins[i]

### pendingCoins

```ts
readonly pendingCoins: CoinInfo[];
```

The coins the wallet is expecting to receive in the future, but which are not yet available for spending

### syncProgress

```ts
readonly syncProgress: SyncProgress | undefined;
```

[SyncProgress](SyncProgress.md) of the wallet

It can be undefined when wallet is started and if it is not syncing

### transactionHistory

```ts
readonly transactionHistory: TransactionHistoryEntry[];
```

Transaction history - an array of [TransactionHistoryEntry](TransactionHistoryEntry.md) sorted from the oldest one to the newest one.
