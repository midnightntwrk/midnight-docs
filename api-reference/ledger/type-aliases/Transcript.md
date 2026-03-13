[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / Transcript

# Type Alias: Transcript\<R\>

```ts
type Transcript<R> = {
  effects: Effects;
  gas: RunningCost;
  program: Op<R>[];
};
```

A transcript of operations, to be recorded in a transaction

## Type Parameters

### R

`R`

## Properties

### effects

```ts
effects: Effects;
```

The effects of the transcript, which are checked before execution, and
must match those constructed by [program](#program)

***

### gas

```ts
gas: RunningCost;
```

The execution budget for this transcript, which [program](#program) must not
exceed

***

### program

```ts
program: Op<R>[];
```

The sequence of operations that this transcript captured
