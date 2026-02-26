[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / Proof

# Class: Proof

A zero-knowledge proof.

## Constructors

### Constructor

```ts
new Proof(data): Proof;
```

#### Parameters

##### data

`String`

#### Returns

`Proof`

## Properties

### instance

```ts
instance: "proof";
```

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
static deserialize(raw): Proof;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`Proof`
