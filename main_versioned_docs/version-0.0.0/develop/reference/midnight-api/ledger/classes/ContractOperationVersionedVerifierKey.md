**@midnight-ntwrk/ledger v3.0.2** • [Readme](../README.md) \| [API](../globals.md)

***

[@midnight-ntwrk/ledger v3.0.2](../README.md) / ContractOperationVersionedVerifierKey

# Class: ContractOperationVersionedVerifierKey

A versioned verifier key to be associated with a [ContractOperation](ContractOperation.md).

## Constructors

### new ContractOperationVersionedVerifierKey(version, rawVk)

```ts
new ContractOperationVersionedVerifierKey(version, rawVk): ContractOperationVersionedVerifierKey
```

#### Parameters

• **version**: `"v1"`

• **rawVk**: `Uint8Array`

#### Returns

[`ContractOperationVersionedVerifierKey`](ContractOperationVersionedVerifierKey.md)

## Properties

### rawVk

```ts
readonly rawVk: Uint8Array;
```

***

### version

```ts
readonly version: "v1";
```

## Methods

### toString()

```ts
toString(compact?): string
```

#### Parameters

• **compact?**: `boolean`

#### Returns

`string`
