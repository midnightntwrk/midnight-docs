[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / signatureTypesEqual

# Function: signatureTypesEqual()

```ts
function signatureTypesEqual(a, b): boolean;
```

Whether two encoded Compact types are the same type.

Nominal for structs, enums and `new type` aliases, matching the compiler; structural for contract
types, per contractCircuitsEqual.

The name is all the nominal cases have. Nothing in the encoding records which module declared it,
so two compilation units that each write `new type Meters = Uint<64>` are one type here. The
underlying type is still compared, so an alias collision cannot smuggle a different
representation past — but a struct agreeing in name and fields is accepted whatever it meant.

## Parameters

### a

[`SignatureType`](../type-aliases/SignatureType.md)

### b

[`SignatureType`](../type-aliases/SignatureType.md)

## Returns

`boolean`
