[**Midnight.js API Reference v2.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / ZKConfig

# Interface: ZKConfig\<K\>

Contains all information required by the [ProofProvider](ProofProvider.md)

## Type Parameters

### K

`K` *extends* `string`

The type of the circuit ID.

## Properties

### circuitId

> `readonly` **circuitId**: `K`

A circuit identifier.

***

### proverKey

> `readonly` **proverKey**: [`ProverKey`](../type-aliases/ProverKey.md)

The prover key corresponding to [ZKConfig.circuitId](#circuitid).

***

### verifierKey

> `readonly` **verifierKey**: [`VerifierKey`](../type-aliases/VerifierKey.md)

The verifier key corresponding to [ZKConfig.circuitId](#circuitid).

***

### zkir

> `readonly` **zkir**: [`ZKIR`](../type-aliases/ZKIR.md)

The zero-knowledge intermediate representation corresponding to [ZKConfig.circuitId](#circuitid).
