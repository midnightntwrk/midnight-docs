[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / PreTranscript

# Class: PreTranscript

A transcript prior to partitioning, consisting of the context to run it in, the program that
will make up the transcript, and optionally a communication commitment to bind calls together.

## Constructors

### Constructor

```ts
new PreTranscript(
   context, 
   program, 
   comm_comm?): PreTranscript;
```

#### Parameters

##### context

[`QueryContext`](QueryContext.md)

##### program

[`Op`](../type-aliases/Op.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>[]

##### comm\_comm?

`string`

#### Returns

`PreTranscript`

## Methods

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
