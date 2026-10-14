[**@midnight-ntwrk/compact-runtime v0.20.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SignatureType

# Type Alias: SignatureType

```ts
type SignatureType = 
  | {
  tag: "Boolean";
}
  | {
  tag: "Field";
}
  | {
  tag: "JubjubScalar";
}
  | {
  tag: "JubjubPoint";
}
  | {
  tag: "Secp256k1Base";
}
  | {
  tag: "Secp256k1Scalar";
}
  | {
  tag: "Secp256k1Point";
}
  | {
  maxval: string;
  tag: "Uint";
}
  | {
  length: number;
  tag: "Bytes";
}
  | {
  tag: "Opaque";
  tsType: string;
}
  | {
  length: number;
  tag: "Vector";
  type: SignatureType;
}
  | {
  tag: "Tuple";
  types: readonly SignatureType[];
}
  | {
  elements: readonly string[];
  name: string;
  tag: "Enum";
}
  | {
  elements: readonly NamedSignatureType[];
  name: string;
  tag: "Struct";
}
  | {
  name: string;
  tag: "Alias";
  type: SignatureType;
}
  | {
  circuits: InterfaceDescriptor;
  name: string;
  tag: "Contract";
};
```

A Compact type as it appears in a circuit signature: a static description, compared structurally.
`CompactType` in compact-types.ts is the codec for a *value* of one of these.

## Type Declaration

```ts
{
  tag: "Boolean";
}
```

### tag

```ts
readonly tag: "Boolean";
```

```ts
{
  tag: "Field";
}
```

### tag

```ts
readonly tag: "Field";
```

```ts
{
  tag: "JubjubScalar";
}
```

### tag

```ts
readonly tag: "JubjubScalar";
```

```ts
{
  tag: "JubjubPoint";
}
```

### tag

```ts
readonly tag: "JubjubPoint";
```

```ts
{
  tag: "Secp256k1Base";
}
```

### tag

```ts
readonly tag: "Secp256k1Base";
```

```ts
{
  tag: "Secp256k1Scalar";
}
```

### tag

```ts
readonly tag: "Secp256k1Scalar";
```

```ts
{
  tag: "Secp256k1Point";
}
```

### tag

```ts
readonly tag: "Secp256k1Point";
```

```ts
{
  maxval: string;
  tag: "Uint";
}
```

### maxval

```ts
readonly maxval: string;
```

### tag

```ts
readonly tag: "Uint";
```

`maxval` is the maximum representable value as a decimal string, not a
 width. `Uint<128>` carries 2**128-1, which is not exactly representable
 as a JavaScript number.

```ts
{
  length: number;
  tag: "Bytes";
}
```

### length

```ts
readonly length: number;
```

### tag

```ts
readonly tag: "Bytes";
```

```ts
{
  tag: "Opaque";
  tsType: string;
}
```

### tag

```ts
readonly tag: "Opaque";
```

### tsType

```ts
readonly tsType: string;
```

```ts
{
  length: number;
  tag: "Vector";
  type: SignatureType;
}
```

### length

```ts
readonly length: number;
```

### tag

```ts
readonly tag: "Vector";
```

### type

```ts
readonly type: SignatureType;
```

```ts
{
  tag: "Tuple";
  types: readonly SignatureType[];
}
```

### tag

```ts
readonly tag: "Tuple";
```

### types

```ts
readonly types: readonly SignatureType[];
```

```ts
{
  elements: readonly string[];
  name: string;
  tag: "Enum";
}
```

### elements

```ts
readonly elements: readonly string[];
```

### name

```ts
readonly name: string;
```

### tag

```ts
readonly tag: "Enum";
```

```ts
{
  elements: readonly NamedSignatureType[];
  name: string;
  tag: "Struct";
}
```

### elements

```ts
readonly elements: readonly NamedSignatureType[];
```

### name

```ts
readonly name: string;
```

### tag

```ts
readonly tag: "Struct";
```

```ts
{
  name: string;
  tag: "Alias";
  type: SignatureType;
}
```

### name

```ts
readonly name: string;
```

### tag

```ts
readonly tag: "Alias";
```

### type

```ts
readonly type: SignatureType;
```

Only a `new type` declaration produces this; a transparent alias is
 erased at emission, since it is not a distinct type.

```ts
{
  circuits: InterfaceDescriptor;
  name: string;
  tag: "Contract";
}
```

### circuits

```ts
readonly circuits: InterfaceDescriptor;
```

### name

```ts
readonly name: string;
```

### tag

```ts
readonly tag: "Contract";
```
