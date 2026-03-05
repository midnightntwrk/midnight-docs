[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapTransient

# Class: ZswapTransient\<P\>

A shielded "transient"; an output that is immediately spent within the same
transaction

## Type Parameters

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

## Properties

### commitment

```ts
readonly commitment: string;
```

The commitment of the transient

***

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

The contract address creating the transient, if applicable

***

### inputProof

```ts
readonly inputProof: P;
```

The input proof of this transient

***

### nullifier

```ts
readonly nullifier: string;
```

The nullifier of the transient

***

### outputProof

```ts
readonly outputProof: P;
```

The output proof of this transient

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
static deserialize<P>(markerP, raw): ZswapTransient<P>;
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

`ZswapTransient`\<`P`\>

***

### newFromContractOwnedOutput()

```ts
static newFromContractOwnedOutput(
   coin, 
   segment, 
   output): UnprovenTransient;
```

Creates a new contract-owned transient, from a given output and its coin.

The [QualifiedShieldedCoinInfo](../type-aliases/QualifiedShieldedCoinInfo.md) should have an `mt_index` of `0`

#### Parameters

##### coin

[`QualifiedShieldedCoinInfo`](../type-aliases/QualifiedShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### output

[`UnprovenOutput`](../type-aliases/UnprovenOutput.md)

#### Returns

[`UnprovenTransient`](../type-aliases/UnprovenTransient.md)
