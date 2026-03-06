## Compact toolchain 0.29.0 (Compact language 0.21.0)

* **Version**: Compact toolchain 0.29.0, Compact language 0.21.0
* **Date**: 2026-02-10
* **Environment**: Preview, Preprod

## High-level summary

The Compact toolchain 0.29.0 is being released today.
This version compiles Compact language 0.21.0.
There is a new standard library circuit,
breaking changes to some standard library names,
and several bug fixes.

## Audience

These release notes are intended for Compact contract developers and for DApp developers who use the Compact runtime.

## What changed

This version includes changes to the Compact standard library and Compact runtime,
and several bug fixes.

- There is a new standard library circuit `constructNativePoint`.
- The standard library circuits `NativePointX` and `NativePointY` are renamed to `nativePointX` and `nativePointY`.
- The syntax for external circuits (used in the standard library) has been removed.
- The `contract-info.json` file now includes version strings and a flag indicating whether a circuit requires a ZK proof.
- There are improved error messages for circuits with invalid return statements.
- There is a bug fix for the compiler's performance when compiling certain loops.
- There is a bug fix for minting or sending tokens where the recipient is the contract itself.
- There is a bug fix for the fixup tool, which did not correctly find relative input files.

## New features

There is a new standard library circuit.

### New standard library circuit to construct `NativePoint`s

**Description**: There is a new standard library circuit `constructNativePoint` that takes the point's x- and y-coordinates and returns the Compact `NativePoint` value.

The "native point" type is the ZK-friendly elliptic curve point used on the Midnight Network.
This curve is currently the Jubjub curve, but that might change in future network updates.
The Compact toolchain release introduced a `NativePoint` type to the standard library,
with a hidden representation as a `new type` alias for a non-exported type.

However, this type was not fully abstract.
Compact `struct` creation syntax was used to construct it.
In this release, there is now a standard library circuit, which should be used to construct `NativePoint`s.

In a future release, we will change the representation so that `struct` creation (and field access) will no longer work.

## Improvements

This release included improvements to the way that the compiler works.

**Improvement**: The compiler now writes more details into the `contract-info.json` file

**Description**: the compiler produces an output file `compiler/contract-info.json` which 
contains information about the contract.
This information is intended to be used by the compiler itself (for separate compilation),
for the contract library (Midnight.js), and potentially for tools like IDEs.

This release adds version strings for the compiler, language, and runtime that the contract was compiled for.

It also adds a flag to the descriptor of each circuit telling whether the circuit needs a ZK proof or not.
This allows other tools (like Midnight.js) to avoid constructing proofs when they are not necessary,
and when submitting such proofs can lead to an error on the blockchain.

**Improvement**: There are better error messages for circuits that have invalid `return` statements.

The error message has been improved for circuits that had a non-`[]` return type, and which either had a path through the circuit that did not end with a `return` statement or ended with a bare `return` statement without a subexpression.

Previously, this error message appeared as a type error.
It has been improved to directly indicate the actual source of the error.

**Improvement**: There is now an ARM Linux release.

There were previously pre-built binaries for ARM and x86-64 macOS and for x86-64 Linux.
There is now also an ARM Linux binary.

## Deprecations

None.

## Breaking changes

Below is a list of breaking changes and required actions for developers.

### Some standard library circuits are renamed

**What changed**: The standard library circuits `NativePointX` and `NativePointY` are renamed to `nativePointX` and `nativePointY`.
**What breaks**: Contracts that use the old names will no longer compile.

**Required actions**:

- Run the 0.29 toolchain's Compact fixup tool on your contracts, via `compact fixup`.

You can also manually update your contracts to use the new names.

### External circuit syntax is removed

**What changed**: The "external circuit" syntax used in the standard library has been removed from the language.
**What breaks**: It's hightly unlikely that you were using this, but if so it will no longer work.

The parser supported external circuit declarations, which were ones that did not have a body (there was no Compact source code implementation).
Instead, the implementation was supplied by the compiler itself.
It's highly unlikely that you were using this feature, because it would require modifications to the compiler and a custom build to use it.

This release removes the syntax from the language, it is now a compiler error to declare a circuit without a body.

## Links and references

- The [Compact documentation portal](https://docs.midnight.network/compact),
  including the [language reference](https://docs.midnight.network/compact/lang-ref) and
  the [standard library documentation](https://docs.midnight.network/compact/compact-std-library)
- The [Compact runtime TypeScript API](https://docs.midnight.network/api-reference/compact-runtime) for DApps
- [Compact compiler usage](https://docs.midnight.network/compact/reference/tools/compiler-usage)
- The [open-source project](https://github.com/LFDT-Minokawa/compact) on GitHub for bug reports and feature requests

## Fixed defect list

The following GitHub issues were fixed in the toolchain 0.29.0 release:

- [#23 Compiler takes exponentially more time trying to compile `MerkleTree.checkRoot` with high `n`](https://github.com/LFDT-Minokawa/compact/issues/23)
- [#55 `mintUnshieldedToken` does not auto-receive when recipient is self](https://github.com/LFDT-Minokawa/compact/issues/55)
- [#64 compact fixup fails to locate files defined with double dot notation](https://github.com/LFDT-Minokawa/compact/issues/64)
- [#92 Trying to put coins into `List` throws - `CommitmentsNEClaimedShieldedReceives`](https://github.com/LFDT-Minokawa/compact/issues/92)
