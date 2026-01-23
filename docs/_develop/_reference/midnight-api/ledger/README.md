# Ledger API

**@midnight-ntwrk/ledger v3.0.2** • Readme \| [API](globals.md)

***

# Ledger TypeScript API

This document outlines the flow of transaction assembly and usage with the
ledger TS API.

## Network ID

Prior to any interaction, setNetworkId should be used to set the [NetworkId](enumerations/NetworkId.md) to target the correct network.

## Proof stages

Most transaction components will be in one of three stages: `X`, `UnprovenX`,
or `ProofErasedX`. The `UnprovenX` stage is _always_ the first one. It is
possible to transition to the `X` stage by proving an `UnprovenTransaction`
through the proof server. For testing, and where proofs aren't necessary, the
`ProofErasedX` stage is used, which can be reached via `eraseProof[s]` from the
other two stages.

## Transaction structure

A [Transaction](classes/Transaction.md) runs in two phases: a _guaranteed_ phase, handling fee payments
and fast-to-verify operations, and a _fallible_ phase, handling operations
which may fail atomically, separately from the guaranteed phase. It therefore
contains:

* A "guaranteed" [Offer](classes/Offer.md)
* Optionally, a "fallible" [Offer](classes/Offer.md)
* Optionally, a sequence of [ContractCall](classes/ContractCall.md)s or [ContractDeploy](classes/ContractDeploy.md)s.

It also contains additional cryptographic glue that will be omitted in this
document.

### Zswap

A Zswap [Offer](classes/Offer.md) consists of:
* A set of [Input](classes/Input.md)s, burning coins.
* A set of [Output](classes/Output.md)s, creating coins.
* A set of [Transient](classes/Transient.md)s, indicating a coin that is created and burnt in
  the same transaction.
* A mapping from [TokenType](type-aliases/TokenType.md)s to offer balance, positive when there are more
  inputs than outputs and vice versa.

[Input](classes/Input.md)s can be created either from a [QualifiedCoinInfo](type-aliases/QualifiedCoinInfo.md) and a contract
address, if the coin is contract-owned, or from a [QualifiedCoinInfo](type-aliases/QualifiedCoinInfo.md) and a
ZswapLocalState, if it is user-owned. Similarly, [Output](classes/Output.md)s can be created
from a [CoinInfo](type-aliases/CoinInfo.md) and a contract address for contract-owned coins, or from a
[CoinInfo](type-aliases/CoinInfo.md) and a user's public key(s), if it is user-owned. A [Transient](classes/Transient.md)
is created similarly to a [Input](classes/Input.md), but directly converts an existing
[Output](classes/Output.md).

A [QualifiedCoinInfo](type-aliases/QualifiedCoinInfo.md) is a [CoinInfo](type-aliases/CoinInfo.md) with an index into the Merkle tree of
coin commitments that can be used to find the relevant coin to spend, while a
[CoinInfo](type-aliases/CoinInfo.md) consists of a coins [TokenType](type-aliases/TokenType.md), value, and a nonce.

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

A ContractCalls object is assembed, and [ContractCallPrototype](classes/ContractCallPrototype.md)s /
[ContractDeploy](classes/ContractDeploy.md)s are added to this directly. This can then be inserted into an
[UnprovenTransaction](classes/UnprovenTransaction.md).

## State Structure

The [LedgerState](classes/LedgerState.md) is the primary entry point for Midnight's ledger state,
and it consists of a [ZswapChainState](classes/ZswapChainState.md), as well as a mapping from [ContractAddress](type-aliases/ContractAddress.md)es to [ContractState](classes/ContractState.md)s. States are immutable, and
applying transactions always produce new outputs states.
