[**@midnight-ntwrk/onchain-runtime v2.0.1**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / Transcript

# Type Alias: Transcript\<R\>

```ts
type Transcript<R>: {
  effects: Effects;
  gas: RunningCost;
  program: Op<R>[];
};
```

A transcript of operations, to be recorded in a transaction

## Type Parameters

• **R**

## Type declaration

### effects

```ts
effects: Effects;
```

The effects of the transcript, which are checked before execution, and
must match those constructed by [program](Transcript.md#program)

### gas

```ts
gas: RunningCost;
```

The execution budget for this transcript, which [program](Transcript.md#program) must not
exceed

### program

```ts
program: Op<R>[];
```

The sequence of operations that this transcript captured
