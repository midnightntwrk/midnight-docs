# Ledger API

**@midnight/ledger v7.0.0**

***

# Ledger TypeScript API

This document outlines the flow of transaction assembly and usage with the
ledger TS API.

## Proof stages

Most transaction components will be in one of three stages: `X`, `UnprovenX`,
or `ProofErasedX`. The `UnprovenX` stage is _always_ the first one. It is
possible to transition to the `X` stage by proving an `UnprovenTransaction`
through the proof server. For testing, and where proofs aren't necessary, the
`ProofErasedX` stage is used, which can be reached via `eraseProof[s]` from the
other two stages.

## Transaction structure

A [Transaction](classes/Transaction.md) runs in two phases: a _guaranteed_ segment, handling fee payments
and fast-to-verify operations, and a series of _fallible segments_. Each segment
may fail atomically, separately from the guaranteed segment. It therefore
contains:

* A "guaranteed" [ZswapOffer](classes/ZswapOffer.md)
* A map of segment IDs to "fallible" [ZswapOffer](classes/ZswapOffer.md)s.
* A map of segment IDs to [Intent](classes/Intent.md)s, which include [UnshieldedOffer](classes/UnshieldedOffer.md)s and [ContractAction](type-aliases/ContractAction.md)s.

It also contains additional cryptographic glue that will be omitted in this
document.

### Zswap

A [ZswapOffer](classes/ZswapOffer.md) consists of:
* A set of [ZswapInput](classes/ZswapInput.md)s, burning coins.
* A set of [ZswapOutput](classes/ZswapOutput.md)s, creating coins.
* A set of [ZswapTransient](classes/ZswapTransient.md)s, indicating a coin that is created and burnt in
  the same transaction.
* A mapping from [RawTokenType](type-aliases/RawTokenType.md)s to offer balance, positive when there are more
  inputs than outputs and vice versa.

[ZswapInput](classes/ZswapInput.md)s can be created either from a [QualifiedShieldedCoinInfo](type-aliases/QualifiedShieldedCoinInfo.md) and a contract
address, if the coin is contract-owned, or from a [QualifiedShieldedCoinInfo](type-aliases/QualifiedShieldedCoinInfo.md) and a
[ZswapLocalState](classes/ZswapLocalState.md), if it is user-owned. Similarly, [ZswapOutput](classes/ZswapOutput.md)s can be created
from a [ShieldedCoinInfo](type-aliases/ShieldedCoinInfo.md) and a contract address for contract-owned coins, or from a
[ShieldedCoinInfo](type-aliases/ShieldedCoinInfo.md) and a user's public key(s), if it is user-owned. A [ZswapTransient](classes/ZswapTransient.md)
is created similarly to a [ZswapInput](classes/ZswapInput.md), but directly converts an existing
[ZswapOutput](classes/ZswapOutput.md).

A [QualifiedShieldedCoinInfo](type-aliases/QualifiedShieldedCoinInfo.md) is a [ShieldedCoinInfo](type-aliases/ShieldedCoinInfo.md) with an index into the Merkle tree of
coin commitments that can be used to find the relevant coin to spend, while a
[ShieldedCoinInfo](type-aliases/ShieldedCoinInfo.md) consists of a coin's [RawTokenType](type-aliases/RawTokenType.md), value, and a nonce.

### Calls

A [ContractDeploy](classes/ContractDeploy.md) consists of an initial contract state, and a nonce.

A [ContractCall](classes/ContractCall.md) consists of a contract's address, the entry point used on this
contract, a guaranteed and a fallible public oracle transcript, a communication
commitment, and a proof. [ContractCall](classes/ContractCall.md)s are constructed via
[ContractCallPrototype](classes/ContractCallPrototype.md)s, which consist of the following raw pieces of data:
* The contract address
* The contract's entry point
* The contract operation expected (that is, the verifier key and transcript
  shape expected to be at this contract address and entry point)
* The guaranteed transcript (as produced by the generated JS code)
* The fallible transcript (as produced by the generated JS code)
* The outputs of the private oracle calls (As a FAB [AlignedValue](type-aliases/AlignedValue.md)s)
* The input(s) to the call, concatenated together (As a FAB [AlignedValue](type-aliases/AlignedValue.md))
* The output(s) to the call, concatenated together (As a FAB [AlignedValue](type-aliases/AlignedValue.md))
* The communications commitment randomness (As a hex-encoded field element string)
* A unique identifier for the ZK circuit used (used by the proof server to index for the prover key)

NOTE: currently the JS code only generates a single transcript. We probably
just want a canonical way to split this into guaranteed/fallible?

A [Intent](classes/Intent.md) object is assembed, and [ContractCallPrototype](classes/ContractCallPrototype.md)s /
[ContractDeploy](classes/ContractDeploy.md)s are added to this directly. This can then be inserted into an
[Transaction](classes/Transaction.md).

## State Structure

The [LedgerState](classes/LedgerState.md) is the primary entry point for Midnight's ledger state,
and it consists of a [ZswapChainState](classes/ZswapChainState.md), as well as a mapping from [ContractAddress](type-aliases/ContractAddress.md)es to [ContractState](classes/ContractState.md)s. States are immutable, and
applying transactions always produce new outputs states.
