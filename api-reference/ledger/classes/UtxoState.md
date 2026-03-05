[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / UtxoState

# Class: UtxoState

The sub-state for unshielded UTXOs

## Constructors

### Constructor

```ts
new UtxoState(): UtxoState;
```

#### Returns

`UtxoState`

## Properties

### utxos

```ts
readonly utxos: Set<Utxo>;
```

The set of valid UTXOs

## Methods

### delta()

```ts
delta(prior, filterBy?): [Set<Utxo>, Set<Utxo>];
```

Given a prior UTXO state, produce the set differences `this \ prior`, and
`prior \ this`, optionally filtered by a further condition.

Note that this should be more efficient than iterating or manifesting the
[utxos](#utxos) value, as the low-level implementation can avoid traversing
shared sub-structures.

#### Parameters

##### prior

`UtxoState`

##### filterBy?

(`utxo`) => `boolean`

#### Returns

\[`Set`\<[`Utxo`](../type-aliases/Utxo.md)\>, `Set`\<[`Utxo`](../type-aliases/Utxo.md)\>\]

***

### filter()

```ts
filter(addr): Set<Utxo>;
```

Filters out the UTXOs owned by a specific user address

#### Parameters

##### addr

`string`

#### Returns

`Set`\<[`Utxo`](../type-aliases/Utxo.md)\>

***

### lookupMeta()

```ts
lookupMeta(utxo): undefined | UtxoMeta;
```

Lookup the metadata for a specific UTXO.

#### Parameters

##### utxo

[`Utxo`](../type-aliases/Utxo.md)

#### Returns

`undefined` \| [`UtxoMeta`](UtxoMeta.md)

***

### new()

```ts
static new(utxos): UtxoState;
```

#### Parameters

##### utxos

`Map`\<[`Utxo`](../type-aliases/Utxo.md), [`UtxoMeta`](UtxoMeta.md)\>

#### Returns

`UtxoState`
