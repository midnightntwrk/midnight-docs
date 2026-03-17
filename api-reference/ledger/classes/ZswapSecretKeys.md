[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapSecretKeys

# Class: ZswapSecretKeys

## Properties

### coinPublicKey

```ts
readonly coinPublicKey: string;
```

***

### coinSecretKey

```ts
readonly coinSecretKey: CoinSecretKey;
```

***

### encryptionPublicKey

```ts
readonly encryptionPublicKey: string;
```

***

### encryptionSecretKey

```ts
readonly encryptionSecretKey: EncryptionSecretKey;
```

## Methods

### clear()

```ts
clear(): void;
```

Clears the secret keys, so that they are no longer usable nor held in memory
Note: it does not clear copies of the keys - which is particularly relevant for proof preimages
Note: this will cause all other operations to fail

#### Returns

`void`

***

### fromSeed()

```ts
static fromSeed(seed): ZswapSecretKeys;
```

Derives secret keys from a 32-byte seed

#### Parameters

##### seed

`Uint8Array`

#### Returns

`ZswapSecretKeys`

***

### fromSeedRng()

```ts
static fromSeedRng(seed): ZswapSecretKeys;
```

Derives secret keys from a 32-byte seed using deprecated implementation.
Use only for compatibility purposes

#### Parameters

##### seed

`Uint8Array`

#### Returns

`ZswapSecretKeys`
