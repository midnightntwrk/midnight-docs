[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / createProofProvider

# Function: createProofProvider()

> **createProofProvider**(`provingProvider`, `costModel?`): [`ProofProvider`](../interfaces/ProofProvider.md)

Creates a [ProofProvider](../interfaces/ProofProvider.md) from a [ProvingProvider](#).
The returned provider proves transactions using the initial cost model.

## Parameters

### provingProvider

[`ProvingProvider`](#)

The underlying proving provider used to generate proofs.

### costModel?

`CostModel` = `...`

Optional cost model to use for proof generation. Defaults to the initial cost model if not provided.

## Returns

[`ProofProvider`](../interfaces/ProofProvider.md)

A [ProofProvider](../interfaces/ProofProvider.md) that delegates proof generation to the given proving provider.
