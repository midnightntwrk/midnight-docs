[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ContractModuleProvider

# Interface: ContractModuleProvider

A user-provided lookup from a cross-contract callee's address to the module implementing the
contract deployed there.

`resolve` is synchronous and total: loading is deferred into the thunk, and an address with no
binding returns `undefined` rather than throwing, so the runtime classifies every failure of this
seam and an application sees one vocabulary rather than one per provider. Calling a circuit the
contract type never declared is not one of them — that is the caller's own source disagreeing
with itself, which compilation should have refused, and it throws a plain `CompactError`.

## Methods

### resolve()

```ts
resolve(calleeAddress): ModuleThunk | undefined;
```

#### Parameters

##### calleeAddress

`string`

#### Returns

[`ModuleThunk`](../type-aliases/ModuleThunk.md) \| `undefined`
