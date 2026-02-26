[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / DustState

# Class: DustState

## Constructors

### Constructor

```ts
new DustState(): DustState;
```

#### Returns

`DustState`

## Properties

### generation

```ts
readonly generation: DustGenerationState;
```

***

### utxo

```ts
readonly utxo: DustUtxoState;
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
static deserialize(raw): DustState;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`DustState`
