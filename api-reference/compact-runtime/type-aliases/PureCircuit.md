[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / PureCircuit

# Type Alias: PureCircuit()

```ts
type PureCircuit = (...args) => any;
```

A circuit evaluable outside a transaction: no ledger access, no cross-contract call, no proof
obligation.

`any[]` because parameters are contravariant: `unknown[]` accepts no real circuit and `never[]`
can't be called. The result is `any` to match.

## Parameters

### args

...`any`[]

## Returns

`any`
