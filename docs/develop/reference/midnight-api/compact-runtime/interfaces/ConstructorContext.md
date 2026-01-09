[**@midnight-ntwrk/compact-runtime v0.14.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ConstructorContext

# Interface: ConstructorContext\<PS\>

Passed to the constructor of a contract. Used to compute the contract's initial ledger state.

## Type Parameters

### PS

`PS` = `any`

## Properties

### initialPrivateState

```ts
initialPrivateState: PS;
```

The private state we would like to use to execute the contract's constructor.

***

### initialZswapLocalState

```ts
initialZswapLocalState: EncodedZswapLocalState;
```

An initial (usually empty) Zswap local state to use to execute the contract's constructor.
