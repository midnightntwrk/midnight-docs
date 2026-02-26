[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / SignatureEnabled

# Class: SignatureEnabled

## Constructors

### Constructor

```ts
new SignatureEnabled(data): SignatureEnabled;
```

#### Parameters

##### data

`string`

#### Returns

`SignatureEnabled`

## Properties

### instance

```ts
readonly instance: "signature";
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
static deserialize(raw): SignatureEnabled;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`SignatureEnabled`
