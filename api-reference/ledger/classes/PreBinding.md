[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / PreBinding

# Class: PreBinding

Information that will be used to bind an [Intent](Intent.md) in the future, but
does not yet prevent modification of it.

## Constructors

### Constructor

```ts
new PreBinding(data): PreBinding;
```

#### Parameters

##### data

`String`

#### Returns

`PreBinding`

## Properties

### instance

```ts
instance: "pre-binding";
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
static deserialize(raw): PreBinding;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`PreBinding`
