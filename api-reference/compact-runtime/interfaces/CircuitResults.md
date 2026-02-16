[**@midnight-ntwrk/compact-runtime v0.14.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CircuitResults

# Interface: CircuitResults\<PS, R\>

The results of the call to a Compact circuit

## Type Parameters

### PS

`PS` = `any`

### R

`R` = `any`

## Properties

### context

```ts
context: CircuitContext<PS>;
```

The updated context after the circuit execution, that can be used to
inform further runs

***

### gasCost

```ts
gasCost: RunningCost;
```

The gas consumption of the circuit execution

***

### proofData

```ts
proofData: ProofData;
```

The data required to prove this circuit run

***

### result

```ts
result: R;
```

The primary result, as returned from Compact
