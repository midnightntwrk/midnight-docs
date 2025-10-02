[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ZswapLocalState

# Interface: ZswapLocalState

Tracks the coins consumed and produced throughout circuit execution.

## Properties

### coinPublicKey

```ts
coinPublicKey: string;
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
inputs: QualifiedCoinInfo[];
```

The coins consumed as inputs to the circuit.

***

### outputs

```ts
outputs: {
  coinInfo: CoinInfo;
  recipient: Recipient;
}[];
```

The coins produced as outputs from the circuit.

#### coinInfo

```ts
coinInfo: CoinInfo;
```

#### recipient

```ts
recipient: Recipient;
```
