[**@midnight-ntwrk/compact-runtime v0.20.0-rc.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CircuitContextOptions

# Type Alias: CircuitContextOptions\<PS\>

```ts
type CircuitContextOptions<PS> = {
  circuitId: CircuitId;
  coinPublicKeyOrZswapState:   | CoinPublicKey
     | EncodedCoinPublicKey
     | ZswapLocalState
     | EncodedZswapLocalState;
  contractAddress: ContractAddress;
  contractState:   | ContractState
     | StateValue
     | ChargedState;
  costModel?: CostModel;
  crossContract?: CrossContractInputs;
  gasLimit?: RunningCost;
  parentBlockHash?: string;
  privateState: PS;
  time?: number;
};
```

The inputs to [createCircuitContext](../functions/createCircuitContext.md).

## Type Parameters

### PS

`PS` = `any`

## Properties

### circuitId

```ts
readonly circuitId: CircuitId;
```

The name of the circuit being executed.

***

### coinPublicKeyOrZswapState

```ts
readonly coinPublicKeyOrZswapState: 
  | CoinPublicKey
  | EncodedCoinPublicKey
  | ZswapLocalState
  | EncodedZswapLocalState;
```

The initial Zswap local state, for tracking shielded coin transfers.

***

### contractAddress

```ts
readonly contractAddress: ContractAddress;
```

The address of the contract defining the circuit being executed.

***

### contractState

```ts
readonly contractState: 
  | ContractState
  | StateValue
  | ChargedState;
```

The ledger state to execute against — most often a snapshot fetched from the chain.

***

### costModel?

```ts
readonly optional costModel: CostModel;
```

The model capturing how much ledger operations cost.

***

### crossContract?

```ts
readonly optional crossContract: CrossContractInputs;
```

Present exactly when this execution may make cross-contract calls.

***

### gasLimit?

```ts
readonly optional gasLimit: RunningCost;
```

The maximum gas this contract should consume.

***

### parentBlockHash?

```ts
readonly optional parentBlockHash: string;
```

The hash of the block this transaction is built on. Reaches the VM's block context, and pins
the block a cross-contract callee's state is fetched at.

***

### privateState

```ts
readonly privateState: PS;
```

The witness / private state — most often a snapshot from local storage.

***

### time?

```ts
readonly optional time: number;
```

The current time, for the block-time kernel operations. Defaults to now.
