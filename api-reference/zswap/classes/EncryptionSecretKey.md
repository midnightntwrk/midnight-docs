[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / EncryptionSecretKey

# Class: EncryptionSecretKey

Holds the encryption secret key of a user, which may be used to determine if
a given offer contains outputs addressed to this user

## Methods

### test()

```ts
test(offer): boolean
```

#### Parameters

##### offer

[`Offer`](Offer.md)

#### Returns

`boolean`

***

### yesIKnowTheSecurityImplicationsOfThis\_serialize()

```ts
yesIKnowTheSecurityImplicationsOfThis_serialize(netid): Uint8Array<ArrayBufferLike>
```

#### Parameters

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### deserialize()

```ts
static deserialize(raw, netid): EncryptionSecretKey
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`EncryptionSecretKey`](EncryptionSecretKey.md)
