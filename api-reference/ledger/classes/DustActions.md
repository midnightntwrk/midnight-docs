[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / DustActions

# Class: DustActions\<S, P\>

## Type Parameters

### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

## Constructors

### Constructor

```ts
new DustActions<S, P>(
   markerS, 
   markerP, 
   ctime, 
   spends?, 
registrations?): DustActions<S, P>;
```

#### Parameters

##### markerS

`S`\[`"instance"`\]

##### markerP

`P`\[`"instance"`\]

##### ctime

`Date`

##### spends?

[`DustSpend`](DustSpend.md)\<`P`\>[]

##### registrations?

[`DustRegistration`](DustRegistration.md)\<`S`\>[]

#### Returns

`DustActions`\<`S`, `P`\>

## Properties

### ctime

```ts
ctime: Date;
```

***

### registrations

```ts
registrations: DustRegistration<S>[];
```

***

### spends

```ts
spends: DustSpend<P>[];
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
static deserialize<S, P>(
   markerS, 
   markerP, 
raw): DustActions<S, P>;
```

#### Type Parameters

##### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### markerS

`S`\[`"instance"`\]

##### markerP

`P`\[`"instance"`\]

##### raw

`Uint8Array`

#### Returns

`DustActions`\<`S`, `P`\>
