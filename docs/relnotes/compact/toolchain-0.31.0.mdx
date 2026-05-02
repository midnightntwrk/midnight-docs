# Compact toolchain 0.31.0

- **Date**: 2026-04-28
- **Language version:** 0.23.0
- **Compact runtime version:** 0.16.0
- **Environment**: All public Midnight environments at the time of release. For the full compatibility matrix, see the [release notes overview](https://docs.midnight.network/relnotes/overview)

## High-level summary

Version 0.31.0 of the Compact toolchain has workarounds for erroneous proof failures which were awkward for developers to avoid.  You can update to this version with `compact update` (as long as it is the most recent version) or `compact update 0.31`.

## Audience

These release notes are intended for Compact smart contract developers and for DApp developers who use the Compact runtime.

## What changed

This release has workarounds for an issue where proofs would erroneously fail because of conditional branches that were not taken.  It also has a number of usability improvements and some other bug fixes.

- Operations in untaken branches are changed so that they cannot fail during proof construction
- The language reference is now up to date with the current language version
- `for` loop iteration bounds can now be generic parameters
- The `contract-info.json` file now contains a description of the public ledger state

## Improvements

There are several correctness and usability improvements.

### Operations in untaken branches cannot fail during proof construction

Off chain and before transaction submission, a Compact circuit is "run" twice.  The first time, the compiled JavaScript code is executed to collect public and private state updates.  The second time, the ZKIR representation of the circuit is used along with the public and private state updates already computed in order to construct a zero-knowledge proof.

During JavaScript execution, conditional branches in the Compact code are either taken or not taken, depending on the value of the condition.  During proof construction, **both branches** of the conditional are considered as part of the relation being proven.  This could lead to erroneous proof construction failures due to the not-taken branches.

The ZKIR representation of operations in conditional branches has been changed to work around this problem, so that they cannot fail when the branch is not taken.  The following operations have had workaround implemented to prevent erroneous proof failures:

- downcasts from `Uint` types to smaller `Uint` types,
- downcasts of `Field` to `Uint` types,
- conversions of byte vectors to and from `Field` and `Uint` types,
- conversions of vectors to byte vectors, and
- uses of relational comparisons (`<`, `<=`, `>`, `>=`) with inputs that might be unknown.

The downside of these workarounds is that they can increase the size of the generated circuit.  If this increase in circuit size is problematic, developers should consider moving these operations outside of conditionally executed Compact code.

**These workarounds are temporary ones,** a genuine fix requires a change to the ZKIR format which will be coming in a later release.

### Up to date language reference

The [Compact language reference](https://docs.midnight.network/compact/reference/compact-reference) found in the Midnight Network documentation has been fully revised and is now up to date with the current version of the Compact language.  Use this reference for definitive answers to questions about the language.

### Generic `for` loop iteration bounds

Compact supports iteration over a range of natural numbers, using the syntax `for (const i of start..end)`, where `i` is a variable name and `start` (inclusive) and `end` (exclusive) are expressions giving the iteration bounds.  The compiler must be able to determine the values of the iteration bounds at compile time.  Previously, the bounds were not allowed to be generic parameters.  Now this is allowed.

### Ledger field layout in `contract-info.json`

The compiler produces a JSON file giving information about the compiled contract, such as component versions and circuits and witnesses and their signatures.  This file now has a description of the contract's public ledger state.

Each ledger field has an entry containing the field name (`name`), the ledger path index (`index`) needed to find the field value, whether the field is exported (`exported`), the ledger-state type (`storage`), and the Compact type arguments to the ledger-state type (`type`).

This information should be suitable for language agnostic tooling (i.e., not necessarily JavaScript) to interpret a contract's public state layout.

## Deprecations

None.

## Breaking changes

### The signature of the Compact runtime function `convertBytesToUint` has changed

This runtime function is used by generated code for type casts from byte vectors to unsigned integers.  It is changed so that it gives better error messages in case of conversion failure.  As part of this change, there is a breaking change to the API.

**What changed:** The `maxval` parameter type is changed from `number` to `bigint` to avoid silently losing precision when comparing against large result values (the result type was already `bigint`).

**What breaks:** Code in a dApp that explicitly called this function for runtime conversion will now have a runtime type error.

**Required actions:** Pass a JavaScript `bigint` value for the `maxval` parameter.

## Fixed defect list

The following additional defects are fixed by updating to Compact toolchain 0.31.

- [Issue #278: JubjubPoint equality in JavaScript is incorrect](https://github.com/LFDT-Minokawa/compact/issues/278)
