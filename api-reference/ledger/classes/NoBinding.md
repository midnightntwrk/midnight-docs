[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / NoBinding

# Class: NoBinding

## Constructors

### Constructor

```ts
new NoBinding(data): NoBinding;
```

#### Parameters

##### data

`String`

#### Returns

`NoBinding`

## Properties

### instance

```ts
instance: "no-binding";
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
static deserialize(raw): NoBinding;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`NoBinding`
