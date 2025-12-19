# On-Chain runtime API

**@midnight-ntwrk/onchain-runtime v0.2.2** • Readme \| [API](globals.md)

***

# Midnight Onchain Runtime TypeScript API

This API provides a TypeScript interface to Midnight's onchain runtime,
including the execution of VM instructions, and the primitives required to
successfully use them.

Key parts of this API are:

- [ContractState](classes/ContractState.md), encapsulating the entirety of a smart contract's
  on-chain state
- [StateValue](classes/StateValue.md), encoding data a contract maintains on-chain
- [QueryContext](classes/QueryContext.md), providing an annotated view into the contract state,
  against which on-chain VM programs can be run
- [Op](type-aliases/Op.md), providing the TypeScript encoding of on-chain VM programs
- [AlignedValue](type-aliases/AlignedValue.md), the "base" value type that encodes all user data stored
  on-chain
