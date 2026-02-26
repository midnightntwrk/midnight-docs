[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / UnprovenInput

# Class: UnprovenInput

A [Input](Input.md), before being proven

All "shielded" information in the input can still be extracted at this
stage!

## Properties

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

The contract address receiving the input, if the sender is a contract

***

### nullifier

```ts
readonly nullifier: string;
```

The nullifier of the input

## Methods

### serialize()

```ts
serialize(netid): Uint8Array<ArrayBufferLike>
```

#### Parameters

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw, netid): UnprovenInput
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenInput`](UnprovenInput.md)

***

### newContractOwned()

```ts
static newContractOwned(
   coin, 
   segment, 
   contract, 
   state): UnprovenInput
```

Creates a new input, spending a specific coin from a smart contract,
against a state which contains this coin.

Note that inputs created in this way *also* need to be authorized by the
contract

#### Parameters

##### coin

[`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

##### segment

`number`

##### contract

`string`

##### state

[`ZswapChainState`](ZswapChainState.md)

#### Returns

[`UnprovenInput`](UnprovenInput.md)
