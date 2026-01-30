**@midnight-ntwrk/onchain-runtime v0.2.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/onchain-runtime v0.2.2](../README.md) / Transcript

# Type alias: Transcript\<R\>

```ts
type Transcript<R>: {
  effects: Effects;
  gas: bigint;
  program: Op<R>[];
};
```

A transcript of operations, to be recorded in a transaction

## Type parameters

• **R**

## Type declaration

### effects

```ts
effects: Effects;
```

The effects of the transcript, which are checked before execution, and
must match those constructed by program

### gas

```ts
gas: bigint;
```

The execution budget for this transcript, which program must not
exceed

### program

```ts
program: Op<R>[];
```

The sequence of operations that this transcript captured
