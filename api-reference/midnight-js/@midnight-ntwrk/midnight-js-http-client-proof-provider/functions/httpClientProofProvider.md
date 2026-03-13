[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-http-client-proof-provider](../README.md) / httpClientProofProvider

# Function: httpClientProofProvider()

> **httpClientProofProvider**\<`K`\>(`url`, `zkConfigProvider`, `config?`): `ProofProvider`

Creates a high-level ProofProvider that implements transaction-level proving
using the low-level circuit-by-circuit ProvingProvider as its foundation.

This adapter bridges the gap between:
- High-level ProofProvider interface (works with complete transactions)
- Low-level ProvingProvider interface (works with individual circuits)

## Type Parameters

### K

`K` *extends* `string`

## Parameters

### url

`string`

The URL of the proof server

### zkConfigProvider

`ZKConfigProvider`\<`K`\>

Provider for zero-knowledge configuration artifacts

### config?

[`ProvingProviderConfig`](../interfaces/ProvingProviderConfig.md)

Optional configuration for the underlying ProvingProvider

## Returns

`ProofProvider`

A ProofProvider instance that uses ProvingProvider internally

## Remarks

**Architecture:**
```
ProofProvider (Transaction-level)
    ↓ (adapter)
ProvingProvider (Circuit-level)
    ↓ (HTTP client)
Proof Server (/check, /prove endpoints)
```

**Note:** The /prove-tx endpoint is NOT used. All proving is done through
individual circuit operations using /check and /prove endpoints.
