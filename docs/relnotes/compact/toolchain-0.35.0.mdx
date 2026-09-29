# Compact toolchain 0.35.0

- **Date:** 2026-09-28
- **Language version:** 0.27.0
- **Compact runtime version:** 0.20.0
- **Environment:** This release works with a Midnight ledger 9 blockchain.  For the full compatibility matrix, see the [release notes overview](https://docs.midnight.network/relnotes/overview)

## High-level summary

Version 0.35.0 of the Compact toolchain is a major release.

This release builds on 0.34.0.  It adds the secp256r1 (P256) and Curve25519 curves, ECDSA verification over P256, Ed25519 signature verification and `sha512` hashing, all of which require the flag `--feature-zkir-v3`.  It also adds the `kernel.caller()` ledger operation, and cross-contract calls now resolve their callee's implementation at run time, which changes the Compact runtime's cross-contract API.  Several changes are breaking; the entries below mark them.

`compact update` installs the latest released version, and `compact update 0.35` installs the latest patch release of toolchain 0.35.

## Audience

These release notes are intended for Compact smart-contract developers and for DApp developers who use the Compact runtime.

## What changed

## [Toolchain 0.34.113, language 0.26.106, runtime 0.19.106]

### Changed

- The `zkir-v3` binary shipped with the compiler now comes from the
  midnight-zkir release candidate `zkir-3.1.0-rc.1`, whose binary encoding
  puts every ZKIR 3.0 instruction and type where compactc 0.34.0 did and
  appends the ZKIR 3.1 additions after them. The `zkir-v3` shipped since
  0.34.103 put those additions in the middle, so a ZKIR 3.0 reader could not
  decode the IR in its prover keys correctly. The release candidate also
  restores the ZKIR 3.0 circuit for `encode` on `Bytes<32>`. Instruction
  names and fields in `.zkir` files are unchanged.

  **This change applies only with the flag `--feature-zkir-v3`.**

### Fixed

- `compactc --feature-zkir-v3 --ledger-version` prints the version of the
  `zkir-v3` dependency, `zkir-3.1.0-rc.1`. Since 0.34.103 it printed the whole
  `flake.nix` line declaring that dependency, because the version was read
  from a `midnight-ledger/` URL and the dependency had moved to midnight-zkir.

### Internal notes

- `zkir-v3` and test-center's `zkir-v3-wasm` track the tag `zkir-3.1.0-rc.1`
  rather than a revision.

- The end-to-end smoke test also checks `--ledger-version` with
  `--feature-zkir-v3`, and `LEDGER_VERSION_REGEX` is anchored, so output that
  merely contains a version no longer passes.

## [Toolchain 0.34.112, language 0.26.106, runtime 0.19.106]

### Added

- Compact reference and API documentation updates for the various new and modified
  language features, including dynamic cross-contract calls and the new foreign
  fields and points, plus various other documentation updates, corrections, and
  clarifications.

### Fixed

- An issue in the type inferencer that could result in internal errors
  rather than appropriately descriptive error messages for casts of foreign
  field values to values of `Field` and `Uint` types.

## [Toolchain 0.34.111, language 0.26.106, runtime 0.19.106]

### Added

- The standard library has a new circuit `secp256r1EcdsaVerify` that verifies
  an ECDSA signature over the secp256r1 (also known as P256) curve and
  returns a boolean value telling whether the verification succeeded.  Like
  `secp256k1EcdsaVerify`, it asserts that the public key is not the identity.
  A public key recovered off-circuit with the runtime's `secp256r1EcdsaRecover`
  can now be verified in circuit.

  **This feature requires the flag `--feature-zkir-v3`.**

- The standard library has a new circuit `ed25519Verify<#n>` that verifies an
  Ed25519 signature (RFC 8032) over an `n`-byte message and returns a boolean
  value telling whether the verification succeeded.  The challenge is hashed
  in-circuit with `sha512`.  It asserts that the public key is not the
  identity.

  **This feature requires the flag `--feature-zkir-v3`.**

### Changed

- Compiled contracts now also reject a `Curve25519Point` passed in from
  JavaScript that is on the curve but outside the prime-order subgroup, that
  is, one with a small-order component.  Circuits can only hold subgroup
  points, so such a point used to be computed with off-circuit and then fail
  at proving time; it is now a type error.  `isValidCurve25519Point` checks
  subgroup membership as well.  secp256k1 and secp256r1 have cofactor 1, so
  they need no such check.

## [Toolchain 0.34.110, language 0.26.105, runtime 0.19.105]

### Added

- Add `secp256r1EcdsaRecover` to the Compact JavaScript runtime.  Given a
  32-byte message hash, an ECDSA signature and a recovery id,
  it returns the corresponding secp256r1 public key.

  Recovery runs off-circuit, as it does for secp256k1.  The standard library
  has no secp256r1 equivalent of `secp256k1EcdsaVerify` yet, so a recovered
  secp256r1 key cannot be constrained in circuit.

### Changed

- Compiled contracts now reject invalid `Secp256k1Point`, `Secp256r1Point` and
  `Curve25519Point` values passed in from JavaScript as circuit or constructor
  arguments or as witness results.  A point is invalid if a coordinate is
  outside the curve's base field, or if it is not on the curve. An
  invalid point is now a type error instead of being computed with.

## [Toolchain 0.34.109, language 0.26.105, runtime 0.19.104]

### Added

- `kernel.caller()` ledger operation returns the caller of a circuit invocation
  as `Maybe<PublicAddress>`:
  - `left(addr)` when called by contract `addr`;
  - `right(addr)` when this is a top-level call and every unshielded input of
    the containing intent is owned by user `addr` (their unshielded address);
  - `none` otherwise, and always in a constructor.

  The ledger derives the top-level value from the intent's unshielded inputs,
  which the wallet adds when it balances the transaction, after the transcript
  that read `caller` was fixed by proving. Off-chain execution records `none`
  for a top-level call, so such a call fails on chain with a read mismatch
  whenever the balanced intent's unshielded inputs all belong to one user.
  `left(addr)` is reliable: the runtime sets the calling contract for callees
  and the ledger gives a claiming contract precedence over the inputs. Until
  an intent can explicitly set the top-level caller, read `kernel.caller()` only where
  the call is known to come from a contract.
- `PublicAddress` standard library type alias for
  `Either<ContractAddress, UserAddress>`.

## [Toolchain 0.34.108, language 0.26.104, runtime 0.19.104]

### Added

- There is one new cast available, from `Bytes<64>` to `Curve25519Scalar`.  The
  semantics is the same as the other from-bytes casts for foreign fields---it
  performs modular reduction by the field modulus of the value represented by
  the byte vector.

  **This feature requires the flag `--feature-zkir-v3`.**

## [Toolchain 0.34.107, language 0.26.103, runtime 0.19.104]

### Fixed

- `compactc --version` now reports the release it was built from, including any
  prerelease identifier and the commit. It previously reported only the
  major.minor.bugfix triple, so every candidate for a release reported that release.

  The version a build reports is now a fact about the build.
  Builds that are not releases report `-dev`: the scheduled build
  and the on-demand dev publish have no release to name, and a dev publish is
  installable, so one reporting the same shape as a finished release could pass
  for it. `-dev` sorts below every release of the same triple, so a version
  check that wanted a release fails instead of passing. That is also the value
  committed in `compiler/version-config.ss`, so a build nothing stamped cannot
  pass for a release either.

  The commit is reported beside the version rather than inside it --
  `0.34.102-rc.2 (a1b2c3d4e 2026-09-10)` -- and is recorded in full in `contract-info.json` and
  `contract-manifest.json` as a new `compiler-commit` field, leaving
  `compiler-version` a valid semver string. That string is what gets pinned in
  CI and compared by tooling, and semver build metadata is not reliably ignored
  in comparison, so a version carrying it reads as a different version.

  `compactc --version --verbose` reports `release`, `commit-hash`,
  `commit-date`, `language-version` and `runtime-version` as separate fields,
  so a script need not parse one out of the other and a bug report needs one
  command rather than three. Fields the build did not record read `unknown`
  rather than being dropped, so the set of fields does not depend on how the
  compiler was built.

  Release candidates still satisfy the same `pragma compiler_version`
  constraints as the release they are candidates for.

- The first of `--help`, `--version`, `--language-version`, `--ledger-version`
  and `--runtime-version` on the command line is the one that acts. Flag
  actions used to run mid-parse, so `--ledger-version --feature-zkir-v3`
  reported the zkir-v2 ledger version -- the feature flag had not been seen
  yet -- while the reverse order reported v3. Both orders now report v3.

- `format-compact --version` and `fixup-compact --version` report the commit
  and its date the same way as `compactc --version`: the three tools share one
  version printer.

## [Toolchain 0.34.106, language 0.26.103, runtime 0.19.104]

### Added

- The standard library now has support for `sha512` hashing.  The signature is
  like `persistentHash` (that is, SHA-256) and `keccak256`, except that the
  return type is `Bytes<64>`.  There is a corresponding function `sha512`
  exported from the Compact runtime.

  **This feature requires the flag `--feature-zkir-v3`.**

## [Toolchain 0.34.105, language 0.26.102, runtime 0.19.103]

### Added

- The standard library now has support for the Curve25519 curve.  It exports two
  new field types `Curve25519Base` and `Curve25519Scalar` and a new point type
  `Curve25519Point`.  They are similer to the secp256k1 and secp256r1 foreign
  curves, with the exception that the JavaScript point type does not have an
  identity flag.  The curve is a twisted Edwards curve and the identity point is
  `{ x: 0, y: 1 }`.

  The fields and curve points support the same operations as the other foreign
  fields and curve points.  The Compact runtime exports types, constants, and
  functions analogous to the ones for the other foreign fields and curves.

  **This feature requires the flag `--feature-zkir-v3`.**

## [Toolchain 0.34.104, language 0.26.101, runtime 0.19.102]

- Any call to the Compact standard library implementations of `jubjubSchnorrVerify`
  and `secp256k1EcdsaVerify` that passes the identity point as the public key now
  results in a failed assertion, because doing so is inherently unsafe.
  This is a **breaking change**.

## [Toolchain 0.34.103, language 0.26.100, runtime 0.19.102]

### Added

- The standard library now has support for the secp256r1 (also known as P256)
  curve.  It exports two new field types, `Secp256r1Base` and `Secp256r1Scalar`,
  and a new point type `Secp256r1Point`.  These behave exactly as the similar
  secp256k1 curve.

  The fields support equals and not-equals comparisons (not relational
  comparisons) and the full set of arithmetic operations `+`, (binary) `-`, `*`,
  `neg`, and `inv`.  The point cannot be constructed in Compact code but it has
  accessors `secp256r1PointX` and `secp256r1PointY`.  The point type supports
  `ecAdd`, `ecMul`, and `ecMulGenerator`.

  The Compact runtime exports an interface `Secp256r1Point` for the point type.
  The interface is identical to `Secp256k1Point`, with a read-only `identity`
  boolean property to indicate the (additive) identity point.  There are also
  descriptors and implementations of the arithmetic operations in the Compact
  runtime.

  The runtime also exports constants for the field modulus and the maximum field
  values for the new field types.

  **This feature requires the flag `--feature-zkir-v3`.**

### Fixed

- Fixed a bug in `default` values for secp256k1 field types in ZKIR.  A literal
  0 was used, which has type `Scalar<BLS12-381>`, so the resulting ZKIR code was
  not well-typed.  Instead, we need to cast that value (indirectly through
  `Bytes<32>`) to the correct secp256k1 field type.

### Removed

- `SECP256K1_LOW_LIMB_BOUND` is removed.  It's purely an implementation detail that
  does not need to be exposed by the runtime.  This feature was introduced in
  Compact runtime 0.19.100, so it's not a breaking change with respect to the
  released 0.19.0.

## [Toolchain 0.34.102, language 0.26.0, runtime 0.19.101]

### Fixed

The `deserialize` operator now requires the byte representing a `Boolean`
value to be either 0 or 1.

## [Toolchain 0.34.101, language 0.26.0, runtime 0.19.101]

### Added

- Cross-contract calls now resolve their callee's implementation at run time
  rather than importing it at compile time.
  A caller no longer names the module implementing the contract deployed at the
  call target: the application supplies one, and the runtime checks it against
  both the caller's contract type and the chain before entering it. Deploying a
  new implementation at an address no longer means recompiling its callers.
- Every generated contract module gains two tables:
  * `declaredInterfaces` — for each contract type the contract calls through,
    the circuit signatures that type declares. Passed to `crossContractCall` at
    the call site, because the descriptor lives in the caller's module and the
    runtime is reached *from* it.
  * `circuitSignatures` — one entry per external circuit name, carrying `pure`,
    `provable`, `argumentTypes` and `resultType`. This is the callee side of
    that comparison.
    Both appear in the emitted `.d.ts`. The `expectedVk` table is unchanged, 
    but is now checked past the called circuit — see below.
- Adds the runtime machinery behind the above. New modules, all re-exported
  from the package index:
  * `providers.ts` — `ContractModuleProvider`, a user-supplied
    `resolve(address)` returning a `ModuleThunk` for the module deployed there,
    or `undefined` when the application has no binding for it. `resolve` is
    synchronous and total; loading is deferred into the thunk.
  * `module.ts` — `Module`, the exports the runtime needs from a callee, plus
    `ContractCtor`, `ContractInstance`, `ProvableCircuit(s)`, `PureCircuit(s)`.
  * `interface-descriptor.ts` — `SignatureType`, `InterfaceDescriptor`,
    `CircuitSignature(s)`, `DeclaredInterfaces` and friends: the type language
    the two emitted tables are written in.
  * `conformance.ts` — `checkConformance` and `signatureTypesEqual`, which
    compare a resolved module's signatures against the caller's contract type
    under six rules (`Existence`, `Purity`, `Provability`, `Arity`,
    `ArgumentType`, `ResultType`), plus `UnreadableSignature` for a type
    constructor this runtime does not know.
  * `verifier-key-hash.ts` — the branded `VerifierKeyHash` and
    `isVerifierKeyHash` / `asVerifierKeyHash` / `verifierKeyHashOf`.
  * `module-resolution.ts` — `ModuleResolutionError`, carrying a
    `ModuleResolutionFailure` discriminated union with eleven kinds:
    `ModuleProviderAbsent`, `PureInterfaceCircuit`, `OperationAbsent`,
    `UnsupportedImplementation`, `ProviderThrew`, `NonconformantImplementation`,
    `UnreadableModule`, `MalformedVerifierKeyHash`, `ImplementationMismatch`,
    `ModuleLoadRejected` and `IncompleteModule`. A payload rather than an error
    subclass, so it survives an application re-throwing through its own error
    type. The last of these covers a module built before dynamic resolution: the
    exports resolution reads are checked as the module loads, so a stale
    artifact names itself instead of failing later as a type error inside
    conformance checking.
- Adds `CompactError.is`, which recognizes runtime errors and their subclasses
  across duplicate installs of the package. A generated contract module resolves
  its own copy of the runtime, so the copy that throws is not the copy an
  application catches with, and `instanceof` fails.
- Key agreement extends past the called circuit: its fingerprint is mandatory
  and must match, and every other circuit present in both `expectedVk` and the
  deployed operations must agree. One circuit is too weak a check, since two
  versions of a contract agree on whatever they did not change; requiring the
  module's whole set is too strong, since removing an entry point would make the
  callee unusable for every other circuit.

### Changed

- **Breaking:** `createCircuitContext` takes a single `CircuitContextOptions`
  object rather than eleven positional parameters. The two providers are grouped
  under one optional `crossContract` member, so an execution either can make
  cross-contract calls or cannot, with no half-provisioned combination in
  between. `parentBlockHash` stays outside the group: it also reaches the VM's
  block context.
- **Breaking:** `crossContractCall` takes a `CrossContractCallOptions` object,
  with two new required fields — `interfaceName` and `declaration`.
- Conformance is checked before key agreement, so a module that does not
  implement the contract type is diagnosed as such rather than as a key
  mismatch.

### Fixed

- A coin commitment created before a cross-contract call is no longer lost when
  the call returns. `createZswapOutput` recorded the commitment only on the live
  call context, never on the per-address query-context map, so restoring the
  caller rewound it and a later `update-with-coin-check` ledger op on that coin
  failed with "Coin commitment not found". The same write-back also means a
  second call into a contract resumes from the commitments its first turn made.

### Removed

- **Breaking:** the static dependency crawler, `contract-dependencies.ts`, and
  its thirteen exports have been removed. These API elements have been used for
  a while.
- **Breaking:** generated contract modules no longer export
  `contractReferenceLocations`, which existed to feed the dependency crawler.
  It is gone from the emitted `.d.ts` as well.
- **Breaking:** `ContractInterfaceMismatchError`, replaced by
  `ModuleResolutionError` with an `ImplementationMismatch` failure.
- **Breaking:** `reentrancyGuard`, from both `CrossContractInputs` and
  `CircuitContext`. The guard is unconditional: the ledger can mis-apply a
  re-entrant transcript, so there is no execution it is correct to skip it for.
- **Breaking:** `isEncodedContractAddress`, which lost its last caller with the
  dependency crawler.
- The compiler no longer emits an import of the callee's module into a caller's
  generated code, since that is what the provider now supplies.

### Internal notes

- The compiler's `print-contract-header` no longer takes `contract-type*`, and
  `contract-import-binding`, `contract-import-path`, `get-self-contract-name`
  and `print-contract-name` went with the callee import.
- `test-center` gains a `TestChain` that implements `ContractModuleProvider`
  alongside `ContractStateProvider`, binding each deployed address to its
  module, plus an `overrideModule` hook so a test can hand the runtime a callee
  that disagrees with the chain. Verifier keys are installed from one real
  compiled key with its payload spliced per contract, committed under
  `test-center/fixtures/verifier-keys/`.
- `stage-javascript`'s `copy-file` now copies byte-for-byte. It read through a
  textual port, so Chez transcoded UTF-8 and every invalid byte became U+FFFD —
  harmless for the `.js` and `.zkir` files it had ever staged, and fatal the
  first time it staged a `.verifier`.
- The runtime's `tsconfig` `lib` moves to `es2022` for `Object.hasOwn`, and
  gains a `typecheck` script that the `test` script runs.
- `tests-e2e` type-checks for the first time: `moduleResolution` moves to
  `bundler`, which drops the deprecated `baseUrl` and resolves `vite`'s
  subpath imports without `skipLibCheck`, plus an explicit `rootDir`.

## [Toolchain 0.34.100, language 0.26.0, runtime 0.19.100]

### Fixed

- `CompactTypeOpaqueUint8Array.fromValue` and `CompactTypeOpaqueString.fromValue`
  now throw a `CompactError` on exhausted input. Previously they returned
  `undefined` (laundered through an `as Uint8Array` cast) and `""` respectively.
  These were the last two descriptors that did not fail loudly on a truncated
  field-aligned binary value.

- `CompactTypeEnum.fromValue` now reports an out-of-range value as
  `expected Enum[<=N]` rather than `expected UnsignedInteger[<=N]`.

- `CompactTypeBytes.fromValue` now returns a copy rather than aliasing the atom
  it decoded, so mutating a decoded value cannot mutate the field-aligned
  binary value it came from.

### Changed

- **Breaking.** Runtime type checks on curve point arguments to exported
  circuits now bound the coordinates rather than only checking their types. A
  `Secp256k1Point` whose `x` or `y` falls outside `[0, MAX_SECP256K1_BASE]`, or
  a `JubjubPoint` whose coordinates fall outside `[0, MAX_FIELD]`, is now
  rejected at the circuit boundary rather than failing later inside `toValue`.
  This makes the check consistent with the one already applied to a bare
  `Secp256k1Base` or `Field` argument.

- **Breaking.** `CompactTypeSecp256k1Point.fromValue` now rejects an identity
  flag that is neither 0 nor 1. Previously any value other than 1 was silently
  read as `false`.

- **Breaking.** `CompactTypeUnsignedInteger.toValue`, `CompactTypeEnum.toValue`
  and `CompactTypeBytes.toValue` now reject arguments they cannot faithfully
  encode: a value outside the type's range, a non-integer enum tag, or a byte
  string longer than the type's length. Previously these descriptors validated
  on decode but not on encode, so it was possible to write a value to the ledger
  that could not be read back.

### Added

- `SECP256K1_LOW_LIMB_BOUND`, the exclusive upper bound of the low-order limb
  of a secp256k1 field value in its field-aligned binary representation. This
  replaces an unnamed decimal literal in `CompactTypeSecp256k1Base` and an
  equivalent but differently spelled expression in `CompactTypeSecp256k1Scalar`.

- `runtime/test/compact-types.test.ts`, a conformance suite for the
  `CompactType` protocol. For every descriptor it asserts that `alignment()`
  declares as many atoms as `toValue` produces, that `fromValue` consumes
  exactly its own prefix, tolerates trailing atoms and fails loudly on truncated
  input, and that values round trip. It also decodes every ordered pair of
  descriptors from one shared array, the way the generated tuple and struct
  classes do, and compares the results element-wise, so a descriptor that
  decodes correctly only as the last member of a compound fails as the first
  half of every pair.

  Descriptors are discovered from the module's exports rather than listed, and a
  coverage test names any exported descriptor that has no sample, so a new
  descriptor cannot be added without conformance coverage. No runtime unit test
  previously called any descriptor's `fromValue` or `toValue`.

  End-to-end coverage of specific Compact constructs remains in
  `compiler/test.ss`; this suite does not duplicate it.
