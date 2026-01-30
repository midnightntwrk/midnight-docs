**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / EncryptionSecretKey

# Class: EncryptionSecretKey

Holds the encryption secret key of a user, which may be used to determine if
a given offer contains outputs addressed to this user

## Constructors

### new EncryptionSecretKey()

```ts
private new EncryptionSecretKey(): EncryptionSecretKey
```

#### Returns

[`EncryptionSecretKey`](EncryptionSecretKey.md)

## Methods

### test()

```ts
test(offer): boolean
```

#### Parameters

• **offer**: [`Offer`](Offer.md)

#### Returns

`boolean`

***

### yesIKnowTheSecurityImplicationsOfThis\_serialize()

```ts
yesIKnowTheSecurityImplicationsOfThis_serialize(netid): Uint8Array
```

#### Parameters

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`

***

### deserialize()

```ts
static deserialize(raw, netid): EncryptionSecretKey
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`EncryptionSecretKey`](EncryptionSecretKey.md)
