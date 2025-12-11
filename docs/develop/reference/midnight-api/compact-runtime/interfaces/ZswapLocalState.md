[**@midnight-ntwrk/compact-runtime v0.11.0**](../README.md)

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
inputs: QualifiedShieldedCoinInfo[];
```

The coins consumed as inputs to the circuit.

***

### outputs

```ts
outputs: {
  coinInfo: ShieldedCoinInfo;
  recipient: Recipient;
}[];
```

The coins produced as outputs from the circuit.

#### coinInfo

```ts
coinInfo: ShieldedCoinInfo;
```

#### recipient

```ts
recipient: Recipient;
```
