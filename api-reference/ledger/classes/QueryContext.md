[**@midnight/ledger v7.0.0**](../README.md)

***

[@midnight/ledger](../globals.md) / QueryContext

# Class: QueryContext

Provides the information needed to fully process a transaction, including
information about the rest of the transaction, and the state of the chain at
the time of execution.

## Constructors

### Constructor

```ts
new QueryContext(state, address): QueryContext;
```

Construct a basic context from a contract's address and current state
value

#### Parameters

##### state

[`ChargedState`](ChargedState.md)

##### address

`string`

#### Returns

`QueryContext`

## Properties

### address

```ts
readonly address: string;
```

The address of the contract

***

### block

```ts
block: CallContext;
```

The block-level information accessible to the contract

***

### comIndices

```ts
readonly comIndices: Map<string, bigint>;
```

The commitment indices map accessible to the contract, primarily via
[qualify](#qualify)

***

### effects

```ts
effects: Effects;
```

The effects that occurred during execution against this context, should
match those declared in a [Transcript](../type-aliases/Transcript.md)

***

### state

```ts
readonly state: ChargedState;
```

The current contract state retained in the context

## Methods

### insertCommitment()

```ts
insertCommitment(comm, index): QueryContext;
```

Register a given coin commitment as being accessible at a specific index,
for use when receiving coins in-contract, and needing to record their
index to later spend them

#### Parameters

##### comm

`string`

##### index

`bigint`

#### Returns

`QueryContext`

***

### qualify()

```ts
qualify(coin): undefined | Value;
```

**`Internal`**

Internal counterpart to [insertCommitment](#insertcommitment); upgrades an encoded
[ShieldedCoinInfo](../type-aliases/ShieldedCoinInfo.md) to an encoded [QualifiedShieldedCoinInfo](../type-aliases/QualifiedShieldedCoinInfo.md) using the
inserted commitments

#### Parameters

##### coin

[`Value`](../type-aliases/Value.md)

#### Returns

`undefined` \| [`Value`](../type-aliases/Value.md)

***

### query()

```ts
query(
   ops, 
   cost_model, 
   gas_limit?): QueryResults;
```

Runs a sequence of operations in gather mode, returning the results of the
gather.

#### Parameters

##### ops

[`Op`](../type-aliases/Op.md)\<`null`\>[]

##### cost\_model

[`CostModel`](CostModel.md)

##### gas\_limit?

[`RunningCost`](../type-aliases/RunningCost.md)

#### Returns

[`QueryResults`](QueryResults.md)

***

### runTranscript()

```ts
runTranscript(transcript, cost_model): QueryContext;
```

Runs a transcript in verifying mode against the current query context,
outputting a new query context, with the [state](#state) and [effects](#effects)
from after the execution.

#### Parameters

##### transcript

[`Transcript`](../type-aliases/Transcript.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>

##### cost\_model

[`CostModel`](CostModel.md)

#### Returns

`QueryContext`

***

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### toVmStack()

```ts
toVmStack(): VmStack;
```

Converts the QueryContext to [VmStack](VmStack.md).

#### Returns

[`VmStack`](VmStack.md)
