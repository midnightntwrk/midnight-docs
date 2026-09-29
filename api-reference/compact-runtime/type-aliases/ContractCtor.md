[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ContractCtor

# Type Alias: ContractCtor()

```ts
type ContractCtor = (witnesses) => ContractInstance;
```

A generated module's `Contract` constructor. `witnesses` is `any` because a generated `Contract`
declares `constructor(witnesses: W)`, and an index signature doesn't satisfy a declared property,
so anything narrower makes every generated module unassignable.

## Parameters

### witnesses

`any`

## Returns

[`ContractInstance`](ContractInstance.md)
