**@midnight/zswap v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight/zswap v3.0.2](../README.md) / UnprovenInput

# Class: UnprovenInput

A [Input](Input.md), before being proven

All "shielded" information in the input can still be extracted at this
stage!

## Constructors

### new UnprovenInput()

```ts
private new UnprovenInput(): UnprovenInput
```

#### Returns

[`UnprovenInput`](UnprovenInput.md)

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
serialize(netid): Uint8Array
```

#### Parameters

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw, netid): UnprovenInput
```

#### Parameters

• **raw**: `Uint8Array`

• **netid**: [`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenInput`](UnprovenInput.md)

***

### newContractOwned()

```ts
static newContractOwned(
   coin, 
   contract, 
   state): UnprovenInput
```

Creates a new input, spending a specific coin from a smart contract,
against a state which contains this coin.

Note that inputs created in this way *also* need to be authorized by the
contract

#### Parameters

• **coin**: [`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

• **contract**: `string`

• **state**: [`ZswapChainState`](ZswapChainState.md)

#### Returns

[`UnprovenInput`](UnprovenInput.md)
