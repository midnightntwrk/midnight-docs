[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ModuleThunk

# Type Alias: ModuleThunk()

```ts
type ModuleThunk = () => Promise<Module>;
```

A deferred load of a generated contract module: evaluated only when a call resolves to it.

## Returns

`Promise`\<[`Module`](Module.md)\>
