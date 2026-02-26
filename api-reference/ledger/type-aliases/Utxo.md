[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / Utxo

# Type Alias: Utxo

```ts
type Utxo = {
  intentHash: IntentHash;
  outputNo: number;
  owner: UserAddress;
  type: RawTokenType;
  value: bigint;
};
```

An unspent transaction output

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
owner: UserAddress;
```

The address owning these tokens.

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
