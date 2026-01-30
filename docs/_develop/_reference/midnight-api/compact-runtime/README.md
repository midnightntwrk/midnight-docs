# Compact runtime API

**@midnight-ntwrk/compact-runtime v0.9.0**

***

# Compact runtime library

This API provides runtime primitives used by Compact's TypeScript output, both
for use by the compiler output directly, and to utilise it or reproduce its
behaviour. This API re-exports a number of items from
`@midnight-ntwrk/onchain-runtime`, and wraps others in a more TypeScript-friendly
API. Key parts of the API are:

-  setNetworkId, required to ensure the right network is being targeted
- [CircuitContext](interfaces/CircuitContext.md), and [CircuitResults](interfaces/CircuitResults.md) part of the input and
  output definition of all circuits
- [WitnessContext](interfaces/WitnessContext.md), part of the input definition of all circuits
- Built-in functions:
  - Hashing/commitment
    - [transientHash](functions/transientHash.md)
    - [transientCommit](functions/transientCommit.md)
    - [persistentHash](functions/persistentHash.md)
    - [persistentCommit](functions/persistentCommit.md)
    - [degradeToTransient](functions/degradeToTransient.md)
  - Elliptic curve
    - [ecAdd](functions/ecAdd.md)
    - [ecMul](functions/ecMul.md)
    - [ecMulGenerator](functions/ecMulGenerator.md)
    - [hashToCurve](functions/hashToCurve.md)
- [ContractState](classes/ContractState.md), encapsulating the entirety of a smart contract's
  on-chain state
- [StateValue](classes/StateValue.md), encoding data a contract maintains on-chain
- [QueryContext](classes/QueryContext.md), providing an annotated view into the contract state,
  against which on-chain VM programs can be run
- [CompactType](interfaces/CompactType.md), providing a runtime representation of basic Compact
  datatypes
- Various TypeScript types matching same-named Compact types
