[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapOutput

# Class: ZswapOutput\<P\>

A shielded transaction output

## Type Parameters

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

## Properties

### commitment

```ts
readonly commitment: string;
```

The commitment of the output

***

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

The contract address receiving the output, if the recipient is a contract

***

### proof

```ts
readonly proof: P;
```

The proof of this output

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
static deserialize<P>(markerP, raw): ZswapOutput<P>;
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

`ZswapOutput`\<`P`\>

***

### new()

```ts
static new(
   coin, 
   segment, 
   target_cpk, 
   target_epk): UnprovenOutput;
```

Creates a new output, targeted to a user's coin public key.

Optionally the output contains a ciphertext encrypted to the user's
encryption public key, which may be omitted *only* if the [ShieldedCoinInfo](../type-aliases/ShieldedCoinInfo.md)
is transferred to the recipient another way

#### Parameters

##### coin

[`ShieldedCoinInfo`](../type-aliases/ShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### target\_cpk

`string`

##### target\_epk

`string`

#### Returns

[`UnprovenOutput`](../type-aliases/UnprovenOutput.md)

***

### newContractOwned()

```ts
static newContractOwned(
   coin, 
   segment, 
   contract): UnprovenOutput;
```

Creates a new output, targeted to a smart contract

A contract must *also* explicitly receive a coin created in this way for
the output to be valid

#### Parameters

##### coin

[`ShieldedCoinInfo`](../type-aliases/ShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### contract

`string`

#### Returns

[`UnprovenOutput`](../type-aliases/UnprovenOutput.md)
