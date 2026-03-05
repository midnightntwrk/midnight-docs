[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapInput

# Class: ZswapInput\<P\>

A shielded transaction input

## Type Parameters

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

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

***

### proof

```ts
readonly proof: P;
```

The proof of this input

## Methods

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize<P>(markerP, raw): ZswapInput<P>;
```

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### markerP

`P`\[`"instance"`\]

##### raw

`Uint8Array`

#### Returns

`ZswapInput`\<`P`\>

***

### newContractOwned()

```ts
static newContractOwned(
   coin, 
   segment, 
   contract, 
   state): UnprovenInput;
```

#### Parameters

##### coin

[`QualifiedShieldedCoinInfo`](../type-aliases/QualifiedShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### contract

`string`

##### state

[`ZswapChainState`](ZswapChainState.md)

#### Returns

[`UnprovenInput`](../type-aliases/UnprovenInput.md)
