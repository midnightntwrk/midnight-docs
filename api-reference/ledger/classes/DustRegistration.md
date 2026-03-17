[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / DustRegistration

# Class: DustRegistration\<S\>

## Type Parameters

### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

## Constructors

### Constructor

```ts
new DustRegistration<S>(
   markerS, 
   nightKey, 
   dustAddress, 
   allowFeePayment, 
signature?): DustRegistration<S>;
```

#### Parameters

##### markerS

`S`\[`"instance"`\]

##### nightKey

`string`

##### dustAddress

`undefined` | `bigint`

##### allowFeePayment

`bigint`

##### signature?

`S`

#### Returns

`DustRegistration`\<`S`\>

## Properties

### allowFeePayment

```ts
allowFeePayment: bigint;
```

***

### dustAddress

```ts
dustAddress: undefined | bigint;
```

***

### nightKey

```ts
nightKey: string;
```

***

### signature

```ts
signature: S;
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
static deserialize<S>(markerS, raw): DustRegistration<S>;
```

#### Type Parameters

##### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

#### Parameters

##### markerS

`S`\[`"instance"`\]

##### raw

`Uint8Array`

#### Returns

`DustRegistration`\<`S`\>
