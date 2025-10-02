[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / EncodedZswapLocalState

# Interface: EncodedZswapLocalState

Tracks the coins consumed and produced throughout circuit execution.

## Properties

### coinPublicKey

```ts
coinPublicKey: EncodedCoinPublicKey;
```

The Zswap coin public key of the user executing the circuit.

***

### currentIndex

```ts
currentIndex: bigint;
```

The Merkle tree index of the next coin produced.

***

### inputs

```ts
inputs: EncodedQualifiedCoinInfo[];
```

The coins consumed as inputs to the circuit.

***

### outputs

```ts
outputs: {
  coinInfo: EncodedCoinInfo;
  recipient: EncodedRecipient;
}[];
```

The coins produced as outputs from the circuit.

#### coinInfo

```ts
coinInfo: EncodedCoinInfo;
```

#### recipient

```ts
recipient: EncodedRecipient;
```
