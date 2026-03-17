[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / createProvingTransactionPayload

# Function: ~~createProvingTransactionPayload()~~

```ts
function createProvingTransactionPayload(transaction, proving_data): Uint8Array;
```

Creates a payload for proving a specific transaction through the proof server

## Parameters

### transaction

[`UnprovenTransaction`](../type-aliases/UnprovenTransaction.md)

### proving\_data

`Map`\<`string`, [`ProvingKeyMaterial`](../type-aliases/ProvingKeyMaterial.md)\>

## Returns

`Uint8Array`

## Deprecated

Use `Transaction.prove` instead.
