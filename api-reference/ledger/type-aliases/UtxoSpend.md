[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / UtxoSpend

# Type Alias: UtxoSpend

```ts
type UtxoSpend = {
  intentHash: IntentHash;
  outputNo: number;
  owner: SignatureVerifyingKey;
  type: RawTokenType;
  value: bigint;
};
```

An input appearing in an [Intent](../classes/Intent.md), or a user's local book-keeping.

## Properties

### intentHash

```ts
intentHash: IntentHash;
```

The hash of the intent outputting this UTXO

***

### outputNo

```ts
outputNo: number;
```

The output number of this UTXO in its parent [Intent](../classes/Intent.md).

***

### owner

```ts
owner: SignatureVerifyingKey;
```

The signing key owning these tokens.

***

### type

```ts
type: RawTokenType;
```

The token type of this UTXO

***

### value

```ts
value: bigint;
```

The amount of tokens this UTXO represents
