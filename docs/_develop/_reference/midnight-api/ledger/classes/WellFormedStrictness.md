**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / WellFormedStrictness

# Class: WellFormedStrictness

Strictness criteria for evaluating transaction well-formedness, used for
disabling parts of transaction validation for testing.

## Constructors

### new WellFormedStrictness()

```ts
new WellFormedStrictness(): WellFormedStrictness
```

#### Returns

[`WellFormedStrictness`](WellFormedStrictness.md)

## Properties

### enforceBalancing

```ts
enforceBalancing: boolean;
```

Whether to require the transaction to have a non-negative balance

***

### verifyContractProofs

```ts
verifyContractProofs: boolean;
```

Whether to validate contract proofs in the transaction

***

### verifyNativeProofs

```ts
verifyNativeProofs: boolean;
```

Whether to validate Midnight-native (non-contract) proofs in the transaction
