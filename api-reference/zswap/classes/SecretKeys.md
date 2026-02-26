[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / SecretKeys

# Class: SecretKeys

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

### fromSeed()

```ts
static fromSeed(seed): SecretKeys
```

Derives secret keys from a 32-byte seed

#### Parameters

##### seed

`Uint8Array`\<`ArrayBufferLike`\>

#### Returns

[`SecretKeys`](SecretKeys.md)

***

### fromSeedRng()

```ts
static fromSeedRng(seed): SecretKeys
```

Derives secret keys from a 32-byte seed using deprecated implementation.
Use only for compatibility purposes

#### Parameters

##### seed

`Uint8Array`\<`ArrayBufferLike`\>

#### Returns

[`SecretKeys`](SecretKeys.md)
