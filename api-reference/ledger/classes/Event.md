[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / Event

# Class: Event

An event emitted by the ledger

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
static deserialize(raw): Event;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`Event`
