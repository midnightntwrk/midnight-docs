[**@midnight-ntwrk/compact-runtime v0.10.1**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / PublicLedgerSegments

# Type Alias: PublicLedgerSegments

```ts
type PublicLedgerSegments = {
  indices: Record<number, PublicLedgerSegments | SparseCompactADT>;
  tag: "publicLedgerArray";
};
```

A data structure indicating the locations of all contract references in a given ledger state.

## Properties

### indices

```ts
indices: Record<number, PublicLedgerSegments | SparseCompactADT>;
```

For reasonably small ledger states, the keys of the record identify locations of ADTs in the ledger state. For example,
if a Compact source file contains

```
contract C {};
struct Struct1 {
  a: Field;
  b: C;
}
ledger ls1: List[Field];
ledger ls2: List[C];
ledger ls3: Set[Struct1];
```

then the indices record will contain keys `1` and `2`, since ledger declarations `1` and `2` contain contract
references while ledger declaration `0` (`List[Field]`) does not.

However, the ledger implementation has a fixed maximum length on the state arrays produced by StateValue.toArray.
When the number of entries in a given state exceeds the maximum, StateValue.toArray produces nested state arrays,
where each inner state array is within the maximum. For each nested state array, there will be a key in the indices record
pointing to a PublicLedgerSegments object.

***

### tag

```ts
tag: "publicLedgerArray";
```
