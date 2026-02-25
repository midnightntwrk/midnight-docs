[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / WellFormedStrictness

# Class: WellFormedStrictness

Strictness criteria for evaluating transaction well-formedness, used for
disabling parts of transaction validation for testing.

## Constructors

### Constructor

```ts
new WellFormedStrictness(): WellFormedStrictness;
```

#### Returns

`WellFormedStrictness`

## Properties

### enforceBalancing

```ts
enforceBalancing: boolean;
```

Whether to require the transaction to have a non-negative balance

***

### enforceLimits

```ts
enforceLimits: boolean;
```

Whether to enforce the transaction byte limit

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

***

### verifySignatures

```ts
verifySignatures: boolean;
```

Whether to enforce the signature verification
