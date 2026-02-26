[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / DustSecretKey

# Class: DustSecretKey

A secret key for the Dust, used to derive Dust UTxO nonces and prove credentials to spend Dust UTxOs

## Properties

### publicKey

```ts
publicKey: bigint;
```

## Methods

### clear()

```ts
clear(): void;
```

Clears the dust secret key, so that it is no longer usable nor held in memory

#### Returns

`void`

***

### fromBigint()

```ts
static fromBigint(bigint): DustSecretKey;
```

Temporary method to create an instance of DustSecretKey from a bigint (its natural representation)

#### Parameters

##### bigint

`bigint`

#### Returns

`DustSecretKey`

***

### fromSeed()

```ts
static fromSeed(seed): DustSecretKey;
```

Create an instance of DustSecretKey from a seed.

#### Parameters

##### seed

`Uint8Array`

#### Returns

`DustSecretKey`
