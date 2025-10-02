[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CircuitResults

# Interface: CircuitResults\<T, U\>

The results of the call to a Compact circuit

## Type Parameters

### T

`T`

### U

`U`

## Properties

### context

```ts
context: CircuitContext<T>;
```

The updated context after the circuit execution, that can be used to
inform further runs

***

### proofData

```ts
proofData: ProofData;
```

The data required to prove this circuit run

***

### result

```ts
result: U;
```

The primary result, as returned from Compact
