[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / WitnessContext

# Interface: WitnessContext\<L, T\>

The external information accessible from within a Compact witness call

## Type Parameters

### L

`L`

### T

`T`

## Properties

### contractAddress

```ts
readonly contractAddress: string;
```

The address of the contract being called

***

### ledger

```ts
readonly ledger: L;
```

The projected ledger state, if the transaction were to run against the
ledger state as you locally see it currently

***

### privateState

```ts
readonly privateState: T;
```

The current private state for the contract
