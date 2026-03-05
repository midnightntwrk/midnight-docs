[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / DustParameters

# Class: DustParameters

## Constructors

### Constructor

```ts
new DustParameters(
   nightDustRatio, 
   generationDecayRate, 
   dustGracePeriodSeconds): DustParameters;
```

#### Parameters

##### nightDustRatio

`bigint`

##### generationDecayRate

`bigint`

##### dustGracePeriodSeconds

`bigint`

#### Returns

`DustParameters`

## Properties

### dustGracePeriodSeconds

```ts
dustGracePeriodSeconds: bigint;
```

***

### generationDecayRate

```ts
generationDecayRate: bigint;
```

***

### nightDustRatio

```ts
nightDustRatio: bigint;
```

***

### timeToCapSeconds

```ts
readonly timeToCapSeconds: bigint;
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
static deserialize(raw): DustParameters;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`DustParameters`
