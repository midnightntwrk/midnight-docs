[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ContractReferenceLocations

# Type Alias: ContractReferenceLocations

```ts
type ContractReferenceLocations = EmptyPublicLedger | PublicLedgerSegments;
```

A data structure indicating the locations of all contract references in a given ledger state. If it is a EmptyPublicLedger,
then no contract references are present in the ledger state. If it is a PublicLedgerSegments, then contract references are
present and can be extracted using [contractDependencies](../functions/contractDependencies.md).
