[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / Proofish

# Type Alias: Proofish

```ts
type Proofish = 
  | Proof
  | PreProof
  | NoProof;
```

How proofs are currently being represented, between:
- Actual zero-knowledge proofs, as should be transmitted to the network
- The data required to *produce* proofs, for constructing and preparing
  transactions.
- Proofs not being provided, largely for testing use or replaying already
  validated transactions.
