[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / Contract

# Interface: Contract\<PS, W\>

Interface for a contract. The data types defined in this file are generic shapes for the artifacts
produced by the `compactc` compiler. In other words, this `Contract` interface should match the shape
of any `Contract` class produced by `compactc`. Midnight.js uses it for generic constraints.

## Type Parameters

### PS

`PS` = `any`

The private state modified by the contract witnesses.

### W

`W` *extends* [`Witnesses`](../type-aliases/Witnesses.md)\<`PS`\> = [`Witnesses`](../type-aliases/Witnesses.md)\<`PS`\>

The contract witnesses type.

## Properties

### impureCircuits

> `readonly` **impureCircuits**: [`ImpureCircuits`](../type-aliases/ImpureCircuits.md)\<`PS`\>

The impure circuits defined in a contract. These circuits can be used to create call transactions.

***

### witnesses

> `readonly` **witnesses**: `W`

The private oracle of the contract.

## Methods

### initialState()

> **initialState**(`context`, ...`args`): `ConstructorResult`\<`PS`\>

Constructs the initial public state of the public oracle of a contract. This is used during
deployment transaction construction.

#### Parameters

##### context

`ConstructorContext`\<`PS`\>

##### args

...`any`[]

#### Returns

`ConstructorResult`\<`PS`\>
