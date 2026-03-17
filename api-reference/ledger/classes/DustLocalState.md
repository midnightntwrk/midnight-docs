[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / DustLocalState

# Class: DustLocalState

## Constructors

### Constructor

```ts
new DustLocalState(params): DustLocalState;
```

#### Parameters

##### params

[`DustParameters`](DustParameters.md)

#### Returns

`DustLocalState`

## Properties

### params

```ts
readonly params: DustParameters;
```

***

### syncTime

```ts
readonly syncTime: Date;
```

***

### utxos

```ts
readonly utxos: QualifiedDustOutput[];
```

## Methods

### generationInfo()

```ts
generationInfo(qdo): 
  | undefined
  | DustGenerationInfo;
```

#### Parameters

##### qdo

[`QualifiedDustOutput`](../type-aliases/QualifiedDustOutput.md)

#### Returns

  \| `undefined`
  \| [`DustGenerationInfo`](../type-aliases/DustGenerationInfo.md)

***

### processTtls()

```ts
processTtls(time): DustLocalState;
```

#### Parameters

##### time

`Date`

#### Returns

`DustLocalState`

***

### replayEvents()

```ts
replayEvents(sk, events): DustLocalState;
```

#### Parameters

##### sk

[`DustSecretKey`](DustSecretKey.md)

##### events

[`Event`](Event.md)[]

#### Returns

`DustLocalState`

***

### replayEventsWithChanges()

```ts
replayEventsWithChanges(sk, events): DustLocalStateWithChanges;
```

#### Parameters

##### sk

[`DustSecretKey`](DustSecretKey.md)

##### events

[`Event`](Event.md)[]

#### Returns

[`DustLocalStateWithChanges`](DustLocalStateWithChanges.md)

***

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### spend()

```ts
spend(
   sk, 
   utxo, 
   vFee, 
   ctime): [DustLocalState, DustSpend<PreProof>];
```

#### Parameters

##### sk

[`DustSecretKey`](DustSecretKey.md)

##### utxo

[`QualifiedDustOutput`](../type-aliases/QualifiedDustOutput.md)

##### vFee

`bigint`

##### ctime

`Date`

#### Returns

\[`DustLocalState`, [`DustSpend`](DustSpend.md)\<[`PreProof`](PreProof.md)\>\]

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

### walletBalance()

```ts
walletBalance(time): bigint;
```

#### Parameters

##### time

`Date`

#### Returns

`bigint`

***

### deserialize()

```ts
static deserialize(raw): DustLocalState;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`DustLocalState`
