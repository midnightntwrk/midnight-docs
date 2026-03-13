[**Midnight.js API Reference v3.1.0**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / zkConfigToProvingKeyMaterial

# Function: zkConfigToProvingKeyMaterial()

> **zkConfigToProvingKeyMaterial**\<`K`\>(`zkConfig`): `object`

Converts a ZKConfig object to ProvingKeyMaterial format.

## Type Parameters

### K

`K` *extends* `string`

## Parameters

### zkConfig

[`ZKConfig`](../interfaces/ZKConfig.md)\<`K`\>

## Returns

`object`

### ir

> **ir**: [`ZKIR`](../type-aliases/ZKIR.md) = `zkConfig.zkir`

### proverKey

> **proverKey**: [`ProverKey`](../type-aliases/ProverKey.md) = `zkConfig.proverKey`

### verifierKey

> **verifierKey**: [`VerifierKey`](../type-aliases/VerifierKey.md) = `zkConfig.verifierKey`
